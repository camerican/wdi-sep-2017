# randomizer.rb
require 'rainbow'
require './roster'

class Cohort
  attr_reader :roster, :past_groups
  @@mode = :v2
  @@colors = %w(aqua aquamarine mediumaquamarine azure beige bisque blanchedalmond darkblue lightblue mediumblue aliceblue cadetblue dodgerblue midnightblue navyblue powderblue royalblue skyblue deepskyblue lightskyblue slateblue darkslateblue mediumslateblue steelblue lightsteelblue brown rosybrown saddlebrown sandybrown burlywood chartreuse chocolate coral lightcoral cornflower cornsilk crimson darkcyan lightcyan firebrick fuchsia gainsboro gold goldenrod darkgoldenrod lightgoldenrod palegoldenrod gray darkgray dimgray lightgray slategray lightslategray webgray darkgreen lightgreen palegreen darkolivegreen yellowgreen forestgreen lawngreen limegreen seagreen darkseagreen lightseagreen mediumseagreen springgreen mediumspringgreen webgreen honeydew indianred indigo ivory khaki darkkhaki lavender lavenderblush lemonchiffon lime linen darkmagenta maroon webmaroon mintcream mistyrose moccasin oldlace olive olivedrab orange darkorange orchid darkorchid mediumorchid papayawhip peachpuff peru pink deeppink lightpink hotpink plum purple mediumpurple rebeccapurple webpurple darkred orangered mediumvioletred palevioletred salmon darksalmon lightsalmon seashell sienna silver darkslategray snow tan teal thistle tomato turquoise darkturquoise mediumturquoise paleturquoise violet darkviolet blueviolet wheat antiquewhite floralwhite ghostwhite navajowhite whitesmoke lightyellow greenyellow)  
def initialize
    @roster = %w(Sherill Veronica Christy Joan Jack Mikey Valerie Michael John Elise Mahima Lisa Sophie Kevin Boony Don Daniel Vikki)
    @past_groups = [%w(Sherill Mikey),
      %w(Kevin Lisa Sophie),
      %w(Daniel Joan),
      %w(Boony Christy),
      %w(Don Mahima),
      %w(Elise Valerie),
      %w(Jack Veronica),
      %w(John Michael),
      %w(Boony, Mahima),
      %w(Veronica, John),
      %w(Christy, Michael),
      %w(Kevin, Valerie),
      %w(Sherill, Joan),
      %w(Don, Sophie),
      %w(Daniel, Mikey),
      %w(Vikki, Jack),
      %w(Elise, Lisa)
    ]
  end
  def make_groups size=2
    groups = []
    people = @roster.clone
    # version 1 - Select random pairs from the Array
    if @@mode == :v1
      #go through the roster and pick random group members to assign
      group = []
      for i in 1..people.length 
        # if we're at desired size, add group to our list of groups
        if group.length == size
          groups.push group
          group = [] # reset group to empty array reference
        end
        # ideas for deletion of a random array element...  
        # ref: https://stackoverflow.com/questions/10988525
        group.push( people.delete_at rand(people.length) )
      end
      # after the for loop concludes, determine whether we have enough
      # people in the last group to add them, or whether to break them
      # up and add to the other groups
      if group.length < size
        group.each_with_index do |person,index|
          groups[index].push person
        end
      else
        groups.push group
      end
    else # version 2... let's make sure that we don't allow group 
      # members to be paired with people they've already worked with
      # go through the roster and pick random group members to assign
      group = []
      # generate a hash that holds all past groupmates we can no longer
      # work with
      exclusion_hash = @past_groups.reduce({}) do |hash,arr|
        arr.each do |person|
          # p "#{arr} #{person}"
          hash[person] = (hash[person] || []) + (arr - [person])
        end
        hash
      end
      color = @@colors.sample
      for i in 0...@roster.length 
        # if we're at desired size, add group to our list of groups
        if group.length == size
          groups.push group
          color = @@colors.sample
          puts Rainbow("Round #{(i+2)/2}").color(color.to_sym)
          group = [] # reset group to empty array reference
        end
        # if we don't have anyone in our group yet, just
        # pick anyone at random
        if group.length < 1
          group.push( people.delete_at rand(people.length) )
        else # if we already have people, lets make sure we
          # only select from people we're eligible to work
          # with...
          eligible_people = group.reduce(people) do |arr,person|
            arr - (exclusion_hash[person]||[])
          end
          # pick a random eligible person, delete them from people
          # and push that deleted person to the group
          group.push( people.delete( eligible_people.sample ))
        end
        puts Rainbow("Group \##{groups.length+1}: ").color(color.to_sym) + Rainbow(group.join(', ')).red
        sleep(3)
      end
      # after the for loop concludes, determine whether we have enough
      # people in the last group to add them, or whether to break them
      # up and add to the other groups
      if group.length < size
        group.each_with_index do |person,index|
          puts "For group balancing, #{person} is added to #{groups[index]}"
          groups[index].push person
        end
      else
        puts "All done!"
        groups.push group
      end
    end
    groups
  end
end