num = "22"
score = 0

q1_answer = "a"
q2_answer = "b"
q3_answer = "c"
q4_answer = "c"
q5_answer = "b"
q6_answer = "a"


def updateScore(answer, userResponse):
    if answer == userResponse.lower():
        return True
   

print("Welcome to your Xmas quiz :)")

username = input("Please enter your name :) ")

print("Hello "+username)

q1_answer_user = input("Which country started the tradition of putting up a Christmas tree?\n A: Germany \n B: France \n C: Iceland\n")
result = updateScore(q1_answer, q1_answer_user)
if result:
    score += 1

q2_answer_user = input("How many ghosts show up in A Christmas Carol?\n A: 1 \n B: 4 \n C: 8\n")
result = updateScore(q2_answer, q2_answer_user)
if result:
    score += 1

q3_answer_user = input("In Home Alone, where are the McCallisters going on holiday when they leave Kevin behind??\n A: Glasgow \n B: New York \n C: Paris\n")
result = updateScore(q3_answer, q3_answer_user)
if result:
    score += 1

q4_answer_user = input("Which country did eggnog originate?\n A: USA \n B: Canada \n C: Britain\n")
result = updateScore(q4_answer, q4_answer_user)
if result:
    score += 1

q5_answer_user = input("How many gifts were given in total in 'The Twelve Days of Christmas' song?\n A: 250 \n B: 364 \n C: 12\n")
result = updateScore(q5_answer, q5_answer_user)
if result:
    score += 1

q6_answer_user = input("What year did Mariah Carey’s ‘All I Want For Christmas Is You’ come out?\n A: 1994 \n B: 1996 \n C: 1998\n")
result = updateScore(q6_answer, q6_answer_user)
if result:
    score += 1

print("Your score was: "+str(score)+"/6")
print("Merry Christmas :)")

