//html Elements
const form = document.querySelector("form")
const submitButton = form.querySelector("button")
const numberBank = document.getElementById("numberBank").querySelector("output")
const sortOneButton = document.getElementById("sortOne")
const sortAllButton = document.getElementById("sortAll")
const odds = document.getElementById("odds").querySelector("output")
const evens = document.getElementById("evens").querySelector("output")

submitButton.addEventListener("click", (e)=>{
    e.preventDefault()
    const newNumber = e.target.parentElement.number.value
    const numberHolder = document.createElement("p")
    numberHolder.textContent = newNumber
    numberBank.append(numberHolder)
})

sortAllButton.addEventListener("click", (e)=>{
    e.preventDefault()
    const numBank = [...numberBank.children]
    const numArray = numBank.map(child=>child.textContent)
    const odds = []
    const evens = []
    for(let i =0; i<numArray.length;i++){
    if(numArray[i]%2===0){
        evens.push(numArray[i])
    } else{
        odds.push(numArray[i])
    }

    oddsBank.replaceChildren(...odds)
    evensBank.replaceChildren(...evens)
   
})

const sortOneFunction = (num)=>{
    const num = prompt("which number?")
    const numBank = [...numberBank.children]
    const numArray = numBank.map(child=>child.textContent)
    if(numArray.indexOf(num)>=0){
    }
    const p = document.createElement("p")
    p.textContent = num
    if(num%2===0){
        evensBank.append(num)
    }else{
        oddsBank.append(num)
    }
    }else{
        alert("That's not in the number bank. Sorry!")
    }
}

sortOneButton.addEventListener("click", sortOneFunction)