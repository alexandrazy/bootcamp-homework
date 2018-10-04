/**
 * Algorithm:
 * 
 * . display a welcome message
 * . display a menu (ask a question using readline)
 * . when i get the input from the user
 *    . if the input is "v", display a list
 *    . if the input is "n", ask a new question to add a new item to the list
 */

const printMenu = () => {
  console.log("(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit")
}



console.log("Welcome to Todo CLI! \n--------------------")
printMenu()


// 3.1. take input from the user <-- chain user input to the menu file 
// 3.2. if that input === v; display the myList <--- make an object myList 
// 3.3. show the menu again 
// 3.4. allow for user input (again)
let myList = []
const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const changeList = () => { interface.question('complete item number:', (answer) => {
  console.log(`completed ${myList[answer][1]}`)
  myList[answer][0]=`[✓]`
  printMenu()
  userInput()
  })
}
 

const deleteItem = () => { interface.question('delete item number: ', (answer) => { 
  console.log(`deleted ${myList[answer][1]}`)
  myList.splice(answer,1)

   printMenu()
  userInput()
  })
}

const addToList = () => { interface.question('add a new item: ', (answer) => {
  console.log(answer)
    myList.push( [ `[ ]`, ` ${answer}` ] )
    printMenu()
    userInput()
  })
}


const userInput = () => interface.question('> ', (answer) => {
  if (answer === "q"){
    console.log("quitting the function")
    interface.close()
  }
  else if (answer === "v"){
    insideView()
  }
  else if (answer === "n"){
    insideNew()
  }
  else if (answer === "dX"){
    insideDelete()
  }
  else if (answer === "cX"){
    insideComplete()
  }
  else  {
    insideTryAgain()
  }

})

userInput()

const insideView = () => {
 // const arr1 = myList.flat(); 
numberedList = myList.map((element, index) => {
console.log(`${index} ${element.join("")}`)
})
  // console.log("inside view")
  printMenu()
  userInput()
  
}

// add to the list 
const insideNew = () => {
  addToList()

}

const insideComplete = () => {
  //console.log("inside Complete")
  //printMenu()
  //userInput()
  changeList()
}

const insideDelete = () => {
  //console.log("inside Delete")
  deleteItem()
}

const insideTryAgain = () => {
  console.log("This is not a valid input, try again")
  printMenu()
  userInput()
}



