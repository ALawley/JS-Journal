var countWords = require('./count_words.js').countWords;
var moment = require('moment');

$(function() {
  $('#journal-entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('.show-journal').append("<h3>" + title + "</h3><p>" + body + "</p><p>" + countWords(body) + "</p><p>Created on: " + moment().format("MMMM Do YYYY, h:mm:ss a") + "</p>");
  });
});
