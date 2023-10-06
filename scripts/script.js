/**
 * displays a message to the user
 * @param {*} score 
 * @param {*} totalWords 
 */
function displayresult(score,totalWords){    
   let spanScore =  document.querySelector(".zoneScore span") 

   let htmlScore = `${score} / ${totalWords}`
   spanScore.innerText = htmlScore
}

/**
 * start the game
 * @returns a sentence indicating the user’s score
 */
function launchGame() {
    // initialization
    let score = 0
    let totalWords = 0
    
    // recovery of the validation button and the input field
    let buttonValidate = document.getElementById("btnValidateWord")
    let inputWriting = document.getElementById("inputWriting")

    // recovery of the value entered at the click of the button
    buttonValidate.addEventListener("click", () =>{
        console.log(inputWriting.value)
    })

    // score display
    displayresult(score,totalWords)
}



