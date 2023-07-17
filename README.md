<div align="center">
<img src="public/icon-128.png" alt="logo"/>
<h1>2FA Authenticator</h1>

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)
![GitHub action badge](https://github.com/hemancini/2fa-authenticator/actions/workflows/build-zip.yml/badge.svg)
<a href="https://chrome.google.com/webstore/detail/2fa-authenticator/pnnmjhghimefjdmdilmlhnojccjgpgeh" target="_blank">
<img alt="Chrome" src="https://img.shields.io/chrome-web-store/v/pnnmjhghimefjdmdilmlhnojccjgpgeh?color=blue&label=Chrome&style=flat-square&logo=google-chrome&logoColor=white" />
</a>

> This project was generated from [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)

### 2FA Authenticator is a Chrome extension that provides 2FA authentication codes in the browser.

</div>

You no longer need to use your phone to authenticate. This 2FA authenticator extension gives you 2-step verification codes right in your browser.

<img src="docs/captures/ChromeWebStore_BadgeWBorder.svg" alt="Chrome Web Store" width="250"/>

## Features <a name="features"></a>

- Verification of OTP codes in your browser
- One click to autofill verification codes
- Scan QR codes from the page
- Show QR codes for quick scan
- Backup your secrets to a file
- Open source

## Developer features <a name="developer-features"></a>

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- HRR (Hot Rebuild & Refresh/Reload)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Clone this repository.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Run `pnpm i` (check your node version >= 16.6, recommended >= 18)
4. Run `pnpm start`
5. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
6. If you want to build in production, Just run `pnpm run build`.

## Documents <a name="documents"></a>

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)

## Credit <a name="credit"></a>

- Originally forked from [Authenticator extension](https://github.com/Authenticator-Extension/Authenticator)
- Thanks to [Chrome Extension Boilerplate](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)
