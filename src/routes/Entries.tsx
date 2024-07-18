import EntryCard from "@components/CardEntry";
import NotEntriesFound from "@components/NotEntriesFound";
import EntriesContext from "@src/contexts/legacy/Entries";
import useUrlHashState from "@src/hooks/useUrlHashState";
import type { EntryState, OTPEntry } from "@src/otp/type";
import { useEntries } from "@src/stores/useEntries";
import { useEntriesUtils } from "@src/stores/useEntriesUtils";
import { Reorder } from "framer-motion";
import { useContext, useEffect } from "react";

export default function Entries() {
  const { entries: entries_v1 } = useContext(EntriesContext);
  const { entries, framerReorder } = useEntries() as EntryState;
  const entriesList = Array.from(entries.values());
  const hasEntries = entries.size > 0;
  const [isEditing] = useUrlHashState("#/edit");
  const { removes } = useEntriesUtils();

  useEffect(() => {
    if (entries.size === 0) {
      const entriesMigrated = migrateV1ToV2(entries_v1);
      useEntries.setState({ entries: entriesMigrated });
    } else {
      console.log("Entries already migrated");
    }
  }, [entries_v1]);

  return hasEntries ? (
    <Reorder.Group
      axis="y"
      values={entriesList}
      onReorder={framerReorder}
      style={{ paddingTop: 15, display: "flex", flexDirection: "column", gap: 12 }}
    >
      {entriesList?.map(
        (entry) =>
          !removes.includes(entry.hash) && (
            <Reorder.Item key={entry.hash} id={entry.hash} value={entry} dragListener={isEditing}>
              <EntryCard entry={entry} />
            </Reorder.Item>
          )
      )}
    </Reorder.Group>
  ) : (
    <NotEntriesFound />
  );
}

const migrateV1ToV2 = (entries: any[]) => {
  if (entries.length === 0) return new Map<string, OTPEntry>();
  return new Map(
    [...entries.values()].map((entry) => {
      {
        delete entry.code;
        delete entry.index;
        delete entry.pinned;
        delete entry.counter;
        delete entry.encSecret;
        return [
          entry.hash,
          {
            ...entry,
            type: entry.type === 1 ? "totp" : "hotp",
            algorithm: entry.algorithm === 1 ? "SHA1" : "SHA256",
          },
        ];
      }
    })
  );
};
