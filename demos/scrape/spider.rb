# spider.rb
# This spider has been set to process data
# from the Princeton review.  We've preloaded
# two schools and will run a batch to capture
# data about each school
require 'open-uri'
require 'nokogiri'
require 'sqlite3'
require 'date'

# rather than use an ORM like ActiveRecord, 
# we can just use sqlite3 directly
# ref: http://www.rubydoc.info/github/luislavena/sqlite3-ruby/SQLite3/Database

# open connection to database
$db = SQLite3::Database.new "db/scraper.sqlite3"
# we'd prefer if results are returned as a hash
$db.results_as_hash = true

# each time we run our script, we'll refer to 
# this as a "batch." So, we'll want to figure out
# what the current batch number should be by
# looking into our database and finding the 
# largest batch that has previously been recorded
$batch = ($db.get_first_value("SELECT MAX(batch) FROM school_capture;") || 0) + 1

# now let's retrieve schools for our scraper
# to get data on
$schools = $db.query("SELECT * FROM school;")

# We now will want to iterate over each of the schools
# in our list and pull data from the web about them


$schools.each do |school|
  doc = Nokogiri::HTML(open(school['url_source']))
  # process the documents we're collecting
  # ref: http://www.nokogiri.org/tutorials/searching_a_xml_html_document.html

  sat_reading = doc.at_xpath("//div[text()='SAT Reading']/following-sibling::div[@class='number-callout']/text()").to_s.split(' - ')
  sat_math = doc.at_xpath("//div[text()='SAT Math']/following-sibling::div[@class='number-callout']/text()").to_s.split(' - ')
  sat_writing = doc.at_xpath("//div[text()='SAT Writing']/following-sibling::div[@class='number-callout']/text()").to_s.split(' - ')
  act = doc.at_xpath("//div[text()='ACT Composite']/following-sibling::div[@class='number-callout']/text()").to_s.split(' - ')

  #$db.execute("INSERT INTO school_capture (`school_id`,`batch`) VALUES ('?', '?')", (1..2).to_a)
    $db.execute("INSERT INTO school_capture (`school_id`,`batch`,`applicants`,`acceptance_rate`,`sat_reading_lo`,`sat_reading_hi`,`sat_math_lo`,`sat_math_hi`,`sat_writing_lo`,`sat_writing_hi`,`act_lo`,`act_hi`,`selectivity_rating`, `deadline_early`, `deadline_late`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? );", [
    school['id'],
    $batch,
    doc.at_xpath("//div[text()='Applicants']/following-sibling::div/text()").to_s.to_i,
    doc.at_xpath("//div[text()='Acceptance Rate']/following-sibling::div/text()").to_s.to_i,
    sat_reading[0].to_i,
    sat_reading[1].to_i,
    sat_math[0].to_i,
    sat_math[1].to_i,
    sat_writing[0].to_i,
    sat_writing[1].to_i,
    act[0].to_i,
    act[1].to_i,
    doc.at_xpath("//a[text()='Admissions selectivity rating']/parent::div/following-sibling::div[@class='number-callout']/text()").to_s.to_i,
    Date.parse( doc.at_xpath("//*[contains(text(),'Early Action') or contains(text(),'Early Decision')]/following-sibling::div[1]/div/text()").to_s ).strftime("%Y-%m-%d"),
    Date.parse( doc.at_xpath("//*[contains(text(),'Regular')]/following-sibling::div[1]/div/text()").to_s ).strftime("%Y-%m-%d")
  ])
   
    # sleep 10 seconds before moving on
  sleep(10)
end

