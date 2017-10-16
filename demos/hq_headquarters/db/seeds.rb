User.create([
  {id: 1, first: 'Cam', last: 'Crews', slack: 'cam'},
  {id: 2, first: 'Joan', last: 'Borbon', slack: 'jborbon'},
  {id: 3, first: 'John', last: 'Murphy', slack: 'john.murphy'}
])

Question.create([
  {
    id: 1, 
    body: "What browser is made by Apple?",
    option1: "Safari",
    option2: "Chrome",
    option3: "Opera",
    correct_answer: 1
  },{
    id: 2,
    body: "What dish is made with Cheese?",
    option1: "Pico de gallo",
    option2: "Quesadilla",
    option3: "Ceviche",
    correct_answer: 2
  },{
    id: 3,
    body: "Which show gave Will Ferrell his start?",
    option1: "SNL",
    option2: "Silicon Valley",
    option3: "Friends",
    correct_answer: 1
  }
])