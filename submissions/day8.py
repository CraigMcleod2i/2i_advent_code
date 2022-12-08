import random

# Rock, Paper, Scissors, Lizard, Spock

while True:
    user_choice = input(
        "Type your choice: rock, paper, scissors, lizard, spock ").lower()
    pc_choice = random.choice(["rock", "paper", "scissors", "lizard", "spock"])

    def get_winner(user_choice, pc_choice):
        win = ""
        if user_choice == pc_choice:
            win = "tie"
        elif user_choice == "rock":
            if pc_choice == "scissors" or pc_choice == "lizard":
                win = "true"
        elif user_choice == "paper":
            if pc_choice == "rock" or pc_choice == "spock":
                win = "true"
        elif user_choice == "scissors":
            if pc_choice == "paper" or pc_choice == "lizard":
                win = "true"
        elif user_choice == "lizard":
            if pc_choice == "paper" or pc_choice == "spock":
                win = "true"
        elif user_choice == "spock":
            if pc_choice == "rock" or pc_choice == "scissors":
                win = "true"

        if win == "true":
            print("You win!")
        elif win == "tie":
            print("It's a tie!")
        else:
            print("You lose.")

    print(f'You chose {user_choice}, and your oponent chose {pc_choice}')
    get_winner(user_choice, pc_choice)

    play_again = input("Do you want to play again? (y/n)")
    if play_again.lower() != "y":
        break
