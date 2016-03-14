(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var countWords = require('./count_words.js').countWords;

$(function() {
  $('#journal-entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('.show-journal').append("<h3>" + title + "</h3><p>" + body + "</p><p>" + countWords(body) + "</p>");
  });
});

},{"./count_words.js":2}],2:[function(require,module,exports){
exports.countWords = function(userText) {
  var textSplit = userText.split(" ");
  for (var i = 0; i < textSplit.length; i++) {
    if (textSplit[i] === "") {
      textSplit.splice(i, 1);
      i--;
    }
  }
  return textSplit.length;
}

},{}]},{},[1]);
