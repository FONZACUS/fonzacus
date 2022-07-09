// ==UserScript==
// @name Block Site
// @description FORK YOUR OWN
// @run-at document-start
// @match *://*/*
// @include *
// ==/UserScript==
(function() {
const blockSite = [
"example.com",
];
const currentSite = window.location.hostname; 
if (blockSite.includes(currentSite)) {
window.stop();
}
})();