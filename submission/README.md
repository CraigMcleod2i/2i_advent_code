# 🎄 Advent Code 2023 🎄
## Code
All Projects are written in C# using the .NET 8 framework. Easiest way to open all submissions is to open the .sln (solution) file located under `/submission/AdventCode-2023/`. All projects are natively AOT compiled. 👀

## Challenges
Below are some brief explanations to my solutions to the problems presented in the Advent Code Event! ❄️
### 1️⃣ - Broken Bridge
**Problem:** Create a function that accepts a string of characters to represent a bridge which will return true if the bridge is safe to cross (does not contain any empty spaces) otherwise false.

**Solution:** First we validate the string then, determine if there are any white spaces present.
### 2️⃣ - Compression
**Problem:** Create a simple compression algorithm to convert a given string. (e.g. AAAABBBB -> A4B4) The smaller the better.

**Solution:** Shorten via db/id hashing/saving then compress the string using Brotli. 
### 3️⃣ - Free Coffee-cup counter
**Problem:** Every 6 cups of coffee I buy, I get the 7th for free. Create a function that takes the total cups I have bought and returns how many free cups I would receive.

**Solution:** Divide bought cups by 6, round the result down (just cast to BigInt). 🧠

## Navigation
All submissions can be located under `/submission/AdventCode-2023/Days/`.
### ⚒️ | Builds 
For example I have compiled the solutions into x64 .exe files which can be run. These are all console applications built for Windows. These executables can be found under `/submission/Builds/`.
### 🧪 | Tests 
Unit Tests are located within the `/submission/AdventCode-Tests` Project, these tests are also written in C# using the Microsoft Test Framework (MSTest).

###### Submissions by: Bruce Devlin