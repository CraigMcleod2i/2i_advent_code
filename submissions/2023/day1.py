bridge = str(input("Please, enter your string bridge: "))

def scanForSpace(bridge):
    if (' ' in bridge):
       return True
    else:
        return False 

bridgeBroken = scanForSpace(bridge)
if (bridgeBroken):
    print('You shall not pass! The bridge is broken.')
else:
    print("Bridge is ok")