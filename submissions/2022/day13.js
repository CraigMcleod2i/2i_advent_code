const jokes = [{'answer1': 'Goat', 'answer2': 'Goat to the door and find out!'},
{'answer1': 'Beets', 'answer2': 'Beets me!'},
{'answer1': 'You', 'answer2': 'Yoo-hoo! Anybody home?'},
{'answer1': 'Butter', 'answer2': 'Butter let me in or I will freeze!'},
{'answer1': 'Who', 'answer2': 'What are you, an owl?'},
{'answer1': 'Leash', 'answer2': 'Leash you could do is answer the doorbell!'},
{'answer1': 'Roach ', 'answer2': 'Roach you a letter, and I am putting it in your mailbox!'},
{'answer1': 'Abby', 'answer2': 'Abby birthday to you!'},
{'answer1': 'Radio', 'answer2': 'Radio not, here I come!'},
{'answer1': 'Witches', 'answer2': 'Witches the best way out of this neighborhood!?'},
{'answer1': 'Sue', 'answer2': 'Sue-prize! Happy birthday!'},
{'answer1': 'Bless', 'answer2': 'But I didn’t sneeze!'},
{'answer1': 'Noah', 'answer2': 'Know a place I can spend the night?'},
{'answer1': 'Lena', 'answer2': 'Lena little closer and I’ll tell you!'},
{'answer1': 'Shore', 'answer2': 'Shore hope you like bad jokes!'},
{'answer1': 'Candice', 'answer2': 'Candice joke get any worse?'},
{'answer1': 'An interrupting cow', 'answer2': 'MOO!'},
{'answer1': 'Theodore', 'answer2': 'Theodore was not opened so I knocked.'},
{'answer1': 'Weirdo', 'answer2': 'Weirdo you think you are going?'},
{'answer1': 'Nobel', 'answer2': 'Nobel … that is why I knocked!'},]

const numberOfJokes = jokes.length
const randomNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min
}
let chosenJoke

setTimeout(() => console.log('Who is there?'), 500)
setTimeout(() => {chosenJoke = jokes[randomNumber(0,numberOfJokes)]
    console.log(chosenJoke.answer1)}, 500)
setTimeout(() => {if (chosenJoke.answer1 === 'An interrupting cow') console.log('An interrupting -')
        else console.log(chosenJoke.answer1 + ' who?')}, 600)
setTimeout(() => console.log(chosenJoke.answer2), 605)
