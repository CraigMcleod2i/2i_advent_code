import string, random, math
first = [*string.ascii_letters]
second = [*string.digits]

def randomStringGenerator(length):
    l = 1
    list = []
    while l <= length:
        rand = math.ceil(random.random()*2)
        rand2 = (first if rand == 1 else second)[math.floor(random.random()*(len(first) if rand == 1 else len(second)))]
        list.append(rand2)
        l+= 1
    return ''.join(list)

def generateRandomSortedArray(length):
    randomString = randomStringGenerator(length)
    return sorted([*randomString])

def findChar(x):
    if ord(x) >= 65:
        return True
    else:
        return False
    
def splitArrayCharsNums(arr):
    charArray = []
    found = arr.index(next(filter(findChar, arr)))
    charArray.append(arr[0:found])
    charArray.append(arr[found:len(arr)])
    return charArray
print(splitArrayCharsNums(generateRandomSortedArray(100)))