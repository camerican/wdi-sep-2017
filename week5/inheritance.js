



function Question(text, answer){
  this.text = text;
  this.answer = answer;
}
Question.prototype.check_answer = function(guess){
  return guess == this.answer
};

function FreeWriting(text,answer,hint = null) {
  this.hint = hint;
  Question.call(this, text,answer);
}