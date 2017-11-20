class Stock < ActiveRecord::Base
  has_many :stock_attributes
end
class StockAttribute < ActiveRecord::Base
  belongs_to :stock
end