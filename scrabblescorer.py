scores = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]
finalPoints = 0

def ascify(char):
    char = ord(char)
    return char-97

word = input("enter the word.> ").lower()

for i in range (len(word)):
    locator = ascify(word[i])
    if locator > 25 or locator < 0:
        print("invalid caracter used, letter discarded")
    else:
        finalPoints = finalPoints + scores[locator]

print(finalPoints)
