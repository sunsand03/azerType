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
 * displays the proposition to the user (sentences or words)
 * @param {*} proposition 
 */
function displayPropositions(proposition){
    let toGuess = document.querySelector(".zoneProposition")
    toGuess.innerText = proposition
}

/**
 * builds and displays the email. 
 * @param {*} name : the name of the player
 * @param {*} email : the email of the person with whom he wants to share his score
 * @param {*} score : the score of the game
 */
function displayEmail(name, email, score) {
    // build the mail
    let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis${name}  et je viens de réaliser le score de ${score} sur le site d'AzerType !`
    // Navigate to the mailto URL to display the mail
    location.href = mailto
}

/**
 * start the game
 * @returns a sentence indicating the user’s score
 */
function launchGame() {

       
     // call of the function initializing the event management 
     // once the document is fully loaded 
     document.addEventListener('DOMContentLoaded', function() {
     initAddEventListenerPopup();
    });

    // score initialization
    let score = 0
    
    // counter initialization
    let i = 0

    // by default, words are proposed
    let listproposition = wordsToGuess
    
    // recovery of the validation button and the input field
    let buttonValidate = document.getElementById("btnValidateWord")
    let inputWriting = document.getElementById("inputWriting")

    displayPropositions(listproposition[i])

    // recovery of the value entered at the click of the button
    buttonValidate.addEventListener("click", () =>{
            console.log(inputWriting.value)
            // update of the score in case of correct answer
            if (inputWriting.value === listproposition[i]){                
                score++                
            }      
            i++
            displayresult(score,i)           
            inputWriting.value = ""  
            
            // end of the game when the word list is complete
            if(listproposition[i] === undefined){
                displayPropositions("Le jeu est fini")
                buttonValidate.disabled = true
            }else{
                displayPropositions(listproposition[i])
            }

    })

    //recovery of the radio button
    let listBtnRadio = document.querySelectorAll(".optionSource input")

    // listens to change at the radio buttons
    for (let index = 0; index <listBtnRadio.length; index++){
       listBtnRadio[index].addEventListener("change", (event)=>{
        if(event.target.value === "1"){
            listproposition = wordsToGuess
        } else {
            listproposition = sentencesToGuess
            
        }
        displayPropositions(listproposition[i])
        })
    }
    
   



    // score display
    displayresult(score,i)
}





