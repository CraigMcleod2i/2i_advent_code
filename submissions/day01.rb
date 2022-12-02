CHRISTMAS = 24
time = Time.new
today = time.day

def countdown_to_christmas(today)
    if today == CHRISTMAS
        "It's Christmas dayyyyyy, get that Turkey in the oven!!"
    else 
        "There are #{CHRISTMAS - today} days till Christmas!!"
    end
end