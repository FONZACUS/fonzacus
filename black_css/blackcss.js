// ==UserScript==
// @name BLACK CSS
// @namespace https://github.com/fonzacus/
// @author FONZACUS
// @description CSS = BLACK
// @version 0.0.1
// @updateURL https://github.com/FONZACUS/hostlist/raw/0/userscript/blackcss.js
// @run-at document-start
// @noframe
// @match *://*/*
// @include *
// @exclude *://*tube*/*
// @license WTFPL
// ==/UserScript==
var style = document.createElement('style')
// shouldnt use * selector
style.textContent = `
html,html *,body,body *
{background:#000!important;color:#FFF!important}
a{color:#AFF!important}a:visited{color:#FAF!important}
source,source *,media,media *,video,video *,audio,audio *, track,track *,
img,img *,svg,svg *,picture,picture *,area,area *,canvas,canvas *,
object,object *,embed,embed *,iframe,iframe *,portal,portal *,
{background:initial!important;color:initial!important}
`
document.head.appendChild(style)