class Player < ApplicationRecord
  belongs_to :team
  belongs_to :position
end
