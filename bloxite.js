/*
bloxite
block site regex
*/
var bloXite = [
'.*example.com.*',
];
var bloXregex = new RegExp(bloXite.join('|'), 'i');
if (bloXregex.test(window.location.hostname)) {
window.location.href = 'https://google.com';
}