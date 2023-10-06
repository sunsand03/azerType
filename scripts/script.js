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

function displayWords(word){
    let wordToGuess = document.querySelector(".zoneProposition")
    wordToGuess.innerText = word
}

/**
 * start the game
 * @returns a sentence indicating the user’s score
 */
function launchGame() {
    // initialization
    let score = 0
    let totalWords = 0
    let i = 0
    
    // recovery of the validation button and the input field
    let buttonValidate = document.getElementById("btnValidateWord")
    let inputWriting = document.getElementById("inputWriting")

    displayWords(wordsToGuess[i])

    // recovery of the value entered at the click of the button
    buttonValidate.addEventListener("click", () =>{
            console.log(inputWriting.value)
            // update of the score in case of correct answer
            if (inputWriting.value === wordsToGuess[i]){                
                score++                
            }      
            i++
            displayresult(score,i)           
            inputWriting.value = ""  
            
            // end of the game when the word list is complete
            if(wordsToGuess[i] === undefined){
                displayWords("Le jeu est fini")
                buttonValidate.disabled = true
            }else{
                displayWords(wordsToGuess[i])
            }

    })

    // score display
    displayresult(score,i)
}





