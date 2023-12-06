puts("OK, how many coffees have you had you crazy hipster, you...?")
inputString = gets
inputStringToInt = inputString.to_i

freebies = 0

if inputStringToInt.is_a? Integer
    if inputStringToInt >= 6
        freebies = (inputStringToInt / 6).floor(0)
    else
        puts('You must have at least one valid stamp card to get a free coffee :/')
        return
    end
end
puts "Oh dear, keep drinking coffee at that rate and there's a heart attack on the horizon. Here's your #{freebies} free cup#{(inputStringToInt / 6).floor(0) > 1 ? 's' : ''}"


