const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']
const numList = document.querySelector('.set-of-numbers')

const mathOperators = ['C', '\u2190', '/', '*', '-', '+', '=']
const mathOperatorsList = document.querySelector('.set-of-math-operators')

const equationInput = document.querySelector('.result>.upper-string')
const resultInput = document.querySelector('.result>.bottom-string')
resultInput.setAttribute("placeholder", "0")

function clean() {
   equationInput.value = resultInput.value
   resultInput.value = ""
   resultInput.setAttribute("placeholder", "0")
}

function addNum(el) {
   resultInput.value += el
}
function addMathOp(el) {
   if (el != '=' && el != '\u2190' && !isNaN(resultInput.value[0])) {
      resultInput.value += el
   }
}

function infinityCheck() {
   if (!isFinite(resultInput.value)) {
      resultInput.value = ''
      resultInput.setAttribute("placeholder", "0")
   }
}
function getResult() {
   if (resultInput.value === "") {
      resultInput.setAttribute("placeholder", "enter value")
   } else {
      resultInput.value = Function("return " + resultInput.value)()
   }
}

function getListOfNumbers() {
   let numList = new DocumentFragment();
   for (let i = 0; i < numbers.length; i++) {
      let numButton = document.createElement('button');
      numButton.className = "number-item"
      numButton.append(numbers[i])
      numList.append(numButton);
      numButton.onclick = function () {
         addNum(numButton.innerText)
      }
   }
   return numList
}

numList.append(getListOfNumbers())

function getListOfMathOperators() {
   let mathOp = new DocumentFragment();
   for (let i = 0; i < mathOperators.length; i++) {
      let mathOpButton = document.createElement('button');
      mathOpButton.className = "math-operator-item"
      mathOpButton.append(mathOperators[i])
      mathOp.append(mathOpButton);
      mathOpButton.onclick = function () {
         if (mathOpButton.innerText === "C") {
            return clean();
         } else if (mathOpButton.innerText === '\u2190') {
            resultInput.value = resultInput.value.slice(0, resultInput.value.length - 1)
         } else if (mathOpButton.innerText === "=") {
            equationInput.value = resultInput.value
            getResult()
            infinityCheck()
         }
         addMathOp(mathOpButton.innerText)
      }
   }
   return mathOp
}
mathOperatorsList.append(getListOfMathOperators())