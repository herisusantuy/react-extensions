/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
chrome.runtime.sendMessage('From the content script', response => {
    console.log(`response is here: ${response}`);
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map