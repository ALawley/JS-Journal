var countWords = require('./count_words.js').countWords;

$(function() {
  $('#journal-entry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('.show-journal').append("<h3>" + title + "</h3><p>" + body + "</p><p>" + countWords(body) + "</p>");
  });
});
