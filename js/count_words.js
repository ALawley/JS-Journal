exports.countWords = function(userText) {
  var textSplit = userText.split(" ");
  for (var i = 0; i < textSplit.length; i++) {
    if (textSplit[i] === "") {
      textSplit.splice(i, 1);
      i--;
    }
  }
  return textSplit.length;
};
