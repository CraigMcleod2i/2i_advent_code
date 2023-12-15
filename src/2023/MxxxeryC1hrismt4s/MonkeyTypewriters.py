import string, random, time
alphabetCharsAndSpace = [*string.ascii_lowercase, ' ']
count = 0
targetString = 'help'

randomString = ''.join(random.choices(alphabetCharsAndSpace, k=len(targetString)))
while('merry christmas' not in randomString):
    if(len(randomString) == 2*len(targetString)):
        randomString = randomString[-len(targetString):]
    randomString+= random.choice(alphabetCharsAndSpace)
    count+=1
    print(count,': ', randomString)

