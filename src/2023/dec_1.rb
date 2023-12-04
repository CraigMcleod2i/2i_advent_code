successString = "Congratulations! You traveller made it all the way across the bridge!"
failString = "...your traveller didn't make it, there was a gap in the bridge..."

puts("Please build a string bridge : ")

inputString = gets

bool = true

inputString.each_char {
    |c|
    sleep(0.2)
    if c != ' '
        print c
    else
        bool = false
        break
    end
}
puts("\n======================================================================\n")
puts bool ? successString : failString
puts("======================================================================\n")




