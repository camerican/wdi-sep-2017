require './scorekeeper.rb'

# create the three teams
$dom = Team.new("DOMinators")
$sass = Team.new("Team SASS")
$ecma = Team.new("ECMAniacs")

$competition = Competition.new("Capstone Challenge")
# add teams to competition
$competition.add_team($dom,$sass,$ecma)

# add players to teams
$dom.add_player("John","Joan","Christy","Sophie","Mahima","Vikki")
$sass.add_player("Lisa","Don","Jack","Veronica","Valerie","Daniel")
$ecma.add_player("Mikey","Elise","Sherill","Michael","Kevin","Boony")



