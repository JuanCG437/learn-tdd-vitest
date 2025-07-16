# Application of TDD wiht vitest in JavaScript
This project contains a collection of exercises and functions developed under the **TDD (Test Driven Development)** approach using the **vistest** testing framework in **JavaScript**. The main objective is to practice and reinforce unit testing concepts, validations and best practices in software development.

---

🧪 What does this project include?

Currently, functions are implemented such as:

### ✅ `fizzbuzz(number)`
- return:
  - `"Fizz"` if the number is divisible by 3.
  - `"Buzz"` if the number is divisible by 5.
  - `"FizzBuzz"` if the number is divisible by 3 and 5.
  - Number as string if not divisible by 3 or 5.
- **validate** throws error if a number is not received as parameter.

### ✅ `canReconfigure(from, to)`
- Checks wheter two strings can be transformed into each other while maintaining correspondece between unique characters.
- **validations:**
  - Both parameters must be strings.
  - Both must have the same length.

### ✅ `prepareGifts(list)`
- Removes duplicates and sorts a list of integers ascendingly.
- **validations:**
  - the parameter must be an array.
  - All elements must be integers.
 
---

## ⚙️ Installation and execution

### 1. Clone the repositore

```bash
git clone https://github.com/JuanCG437/learn-tdd-vitest
cd leanr-tdd-vitest
```

### 2. Install dependences 

```bash
npm install
```

### 3. Execute test

```bash
npm run test
```

---

## 📁 Project Structure

├── src/                    
├── test/                   
├── package.json            
├── .gitignore              
└── README.md           

## 🧠 Why use TDD?

- Improves code quality.
- Facilities maintenance.
- Allows early detection of errors.
- Encourages a more modular and requirements-driven design.

## 🚀 Tecnologies used
JavaScript (ES6+)

Vitest - Fast and easy testing framework

Node.js - Runtime environment

## 👨‍💻 Author

Juan Manuel Cortez Gómez

Software Development Technology Student
