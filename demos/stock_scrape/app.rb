require 'active_record'
require 'nokogiri'
require 'open-uri'
require './models'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'db/cool.sqlite3'
)






