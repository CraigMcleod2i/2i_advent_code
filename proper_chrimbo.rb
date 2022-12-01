require 'date'

today = Date.today
todays_day = today.yday.to_i
todays_year = today.year.to_i

christmas_day = Date.new(todays_year,12,25).yday.to_i;

but_how_long_santa = (christmas_day - todays_day).to_s

if but_how_long_santa.to_i < 0
  christmas_day = Date.new(todays_year+1,12,25)
  but_how_long_santa = (christmas_day - today).to_i
end;
days_string = but_how_long_santa.to_i == 1 ? 'day' : 'days'
puts(but_how_long_santa.to_s + ' ' + days_string + ' until this Christmas!!')