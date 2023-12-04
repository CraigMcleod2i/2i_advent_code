from itertools import groupby

input = str(input("Enter your string for compression: "))

def compress(input):
    compressed = ""
    for char, group in groupby(input):
        count = len(list(group))
        if (count > 1):
            if (char.isdigit()):
                compressed = compressed + char + '(' + str(count) +')'
            else:
                compressed = compressed + char + str(count)
        else: 
            compressed = compressed + char
    return compressed

print(compress(input))
print('input length: ' + str(len(input)))
print('compressed input length: ' + str(len(compress(input))))