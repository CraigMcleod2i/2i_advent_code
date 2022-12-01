from datetime import date

def getDelta(inputYear):
    xmas=(date(inputYear,12,25))
    today=(date.today())
    delta = xmas-today
    return delta

def justInt(delta):
    delta=str(delta)
    delta = delta.split()
    return int(delta[0])

def figureItOut():
    delta=-1
    inYear = 2020
    while delta < 0:
        delta = justInt(getDelta(inYear))
        inYear = inYear+1
    print(delta,"days to christmas!")

figureItOut()
