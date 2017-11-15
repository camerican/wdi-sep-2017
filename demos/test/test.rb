require './main'

describe '#Die' do
  it ".roll a number" do
    expect(Die.roll).to be_kind_of(Integer)
  end
end