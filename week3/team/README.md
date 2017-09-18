# Team Example

We're building an example of a Team with a few different sports Teams
that inherit from it.

* SoccerTeam
* BaseballTeam
* FootballTeam

We'll focus on the SoccerTeam...  for this example.

## Team

The Team should have a name, sport, playerCount, and an array of players called roster. We should be able to add a player to the roster using an addPlayer method.  We'll be able to stash this method in the Team's prototype.

## SoccerTeam

We want the SoccerTeam to have everything a Team has but also a league and sponsor.  To accomplish this we will have it:

* call the Team constructor, setting the playerCount and sport
* set its SoccerTeam prototype to refer to a copy of Team prototype using Object.create

## Player

A Player will be an object prepresenting an athlete with a name, number (shirt number), and status (healthy - true, or injured - false)

We will have a setHealthy and setInjured status to alter their status.