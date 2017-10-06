class Trivia
  attr_reader :num_questions
  def initialize(num_questions = 10)
    @num_questions = num_questions
    @questions = []
  end
  def add_question(question)
    @questions.push(question)
  end
end

class Question
  attr_reader :text
  def initialize(text, answer)
    @text = text
    @answer = answer
  end
  def check_answer( guess )
    guess == @answer
  end
end


class FreeWriting < Question
  def initialize(text, answer, hint = nil)
    @hint = hint
    super(text,answer)
  end
end
