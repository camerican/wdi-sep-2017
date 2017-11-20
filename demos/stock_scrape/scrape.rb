require './app'

doc = Nokogiri::HTML(open("https://finviz.com/screener.ashx?v=152&f=cap_smallover,fa_pe_profitable,geo_usa,sh_avgvol_o300,sh_opt_option&ft=4"))

pages = doc.at_xpath("//td[child::a[contains(@href,'screener')]][last()][descendant::a[contains(text(),1)]]/descendant::a[last()-1]/text()").to_s.to_i



p "There are #{pages} pages"





# in thousands...
def process_cap( cap )
  if cap.match? /\dB/
    p cap, cap.to_f * 1000000
    cap.to_f * 1000000
  elsif cap.match? /\dM/
    cap.to_f * 1000
  else
    cap.to_f
  end
end

def process_page( doc )

  doc.xpath("//table[@cellpadding=3][@cellspacing=1]/descendant::tr[@class]").each do |row|

    symbol = row.at_xpath("./descendant::td[2]/a/text()").to_s

    p "processing #{symbol}"
    stock = Stock.find_by( symbol: symbol )
    stock = Stock.create(
      symbol: symbol,
      name: row.at_xpath("./descendant::td[3]/a/text()").to_s,
      sector: row.at_xpath("./descendant::td[4]/a/text()").to_s,
      industry: row.at_xpath("./descendant::td[5]/a/text()").to_s
    ) unless stock
    #p "... #{stock}"
    cap = row.at_xpath("./descendant::td[7]/a/text()").to_s
    p "... #{cap}"
    StockAttribute.create(
      stock_id: stock.id,
      day: Date.today,
      market_cap: process_cap( cap )
    )

  end

end

#process the first page full
process_page(doc)

(pages-1).times do |n|
  sleep (8..15).to_a.sample
  p "processing page #{n+1}..."
  process_page Nokogiri::HTML(open("https://finviz.com/screener.ashx?v=152&f=cap_smallover,fa_pe_profitable,geo_usa,sh_avgvol_o300,sh_opt_option&ft=4&r=#{(n+1)*20+1}"))
end


