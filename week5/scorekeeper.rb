class Competition
  attr_reader :name, :teams
  def initialize(name)
    @name = name
    @teams = []
    @games_played = []
  end
  def add_team(*teams)
    teams.each do |team|
      @teams.push(team)
      @games_played.push(0)
    end
  end
  def next_match
    # get minimum number of games_played
    min = @games_played.map{|x| x}.min
    # pick a team w/ the minimum number of games_played
    index = (0...@teams.length).to_a.select{|x| @games_played[x] == min}.sample
    # use that index to look up the team
    team = @teams[index]
    puts "The next team up is #{team.name} with #{team.players[min]}"
    @games_played[index] += 1 
  end
end

class Team
  attr_reader :score, :name
  def initialize(name)
    @name = name
    @score = 0
    @players = []
   end
  def players
    @players
  end
  def add_player(*players)
    players.each do |player|
      @players.push(player)
    end
  end
  private 
  def score=(score)
    @score = score
  end
end
