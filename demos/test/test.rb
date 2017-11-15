require './main'
require 'set'

describe '#Die' do
  before :each do
    @roll = Die.roll
  end

  it ".roll a number" do
    expect(@roll).to be_kind_of(Integer)
  end
  it ".roll within range" do
    #roll = Die.roll
    expect(@roll).to be >= 1
    expect(@roll).to be <= 6
  end
  it ".roll should appear random" do
    rolls = Set.new
    5000.times do 
      rolls << Die.roll
    end
    expect(rolls.length).to be(6)
    6.times do |n|
      expect(rolls.member? n+1).to be true
    end
    # expect(rolls.member? 1).to be true
    # expect(rolls.member? 2).to be true
  end

  after do
    puts "You rolled a #{@roll}"
  end
end