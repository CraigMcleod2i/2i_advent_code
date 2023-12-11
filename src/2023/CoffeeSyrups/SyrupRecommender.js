const syrups = () => {
    return {
    "january": "Treat yourself to a mocha instead, it's freezing!",
    "february": "Caramel and vanilla",
    "march": "It's a marchiatto...",
    "april": "It's easter, I've added nothing to your coffee. But I have served it in an easter egg",
    "may": "Green tea for your pre-summer detox?",
    "june": "I can tell you're thinking about July and iced coffees; I left this cappuccino out on the side to get cold",
    "july": "Ice cubes, sugar syrup, milk and serve",
    "august": "You're in Ibiza, here's a red bull instead",
    "september": "You said espresso martini, right?",
    "october": "...sigh, here is your Pumpkin Spiced instagram predictability",
    "november": "Dash of hickory to remind you of bonfires and fireworks",
    "december": "I've poured your coffee out and given you a mulled wine instead"
}}

const recommendASyrup = (month) => {
    return syrups()[month.toLowerCase()] || "Black coffee is the only acceptable answer"
}

console.log(recommendASyrup('april'))
