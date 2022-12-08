import random
import enchant

scores = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]
word = "bignonsensetest"

def arrayPlace(char):
    char = ord(char)
    return char-97

def charByPlace(code):
    code = chr(code+97)
    return code

def check(word):
    d = enchant.Dict("en_GB")
    verdict = d.check(word)
    return verdict

def getScore(word):
    finalPoints=0
    for i in range (len(word)):
        locator = arrayPlace(word[i])
        if locator > 25 or locator < 0:
            print("invalid caracter used, letter discarded")
        else:
            finalPoints = finalPoints + scores[locator]
    return(finalPoints)

def GeneratePieces(size):
    holder = []
    for i in range (size):
        place = random.randint(0,25)
        #print (charByPlace(place))
        holder.append(charByPlace(place))
    print(holder)
    return holder

pieces = GeneratePieces(7)
print("Make a word from these")


    
        
def checkAndScore(word, pieces):
    if word == "bignonsensetest":
        return False
    for i in range (len(word)):
        occurences = pieces.count(word[i])
        if occurences < 1:
            return False
        else:
            pieces.remove(word[i])
    return True
        

while (checkAndScore(word, pieces)) != True or check(word) != True:
    word = input("enter a valid word using only caracters provided> ")
    word = word.lower()
    
print ("This was worth",(getScore(word)),"points")
    
        
