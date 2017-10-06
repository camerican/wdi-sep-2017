# take an array of menu options
# then pick a random lunch item
options = ["Thai Sliders","Bon Chon","Jubiliee"]

def lunch( menu )
  #menu[rand(menu.length)]
  menu.sample
end

puts lunch( options )


