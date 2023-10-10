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
    let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis ${name}  et je viens de réaliser le score de ${score} sur le site d'AzerType !`
    // Navigate to the mailto URL to display the mail
    location.href = mailto
}

/**
 * word length check (minimum 2 characters)
 * @param {string} name 
 * throws {Error} 
 */
function validateName(name) {    
    if (name.length < 2){
       throw new Error("le nom est trop court. ")
    }
       
}

/**
 * check of the format of the email address
 * @param {string} email 
 * throws {Error} 
 */
function validateEmail(email) {
    let emailRegex = new RegExp("[a-z0-9.-_]+@+[a-z0-9.-_]+\\.+[a-z0-9.-_]+")
    if (!emailRegex.test(email)){
        throw new Error("l'email n'est pas valide. ")
    }
  
}

/**
 * display errors to the user
 * @param {string} message 
 */
function displayMessageerror(message) {
    
    let spanerrorMessage = document.getElementById("errorMessage")

    if(!spanerrorMessage){
        let popup = document.querySelector(".popup")
        spanerrorMessage = document.createElement("span")
        spanerrorMessage.id = "errorMessage"        
        popup.appendChild(spanerrorMessage) 
    }

    spanerrorMessage.innerText = message
    
}

/**
 * manage form to share score
 * @param {number} scoreEmail 
 */
function manageForm(scoreEmail) {    
    try {
        let fieldName = document.getElementById("name")
        let name = fieldName.value
        validateName(name)       
                
        let fieldEmail = document.getElementById("email")
        let email = fieldEmail.value
        validateEmail(email)
        displayMessageerror("")
        displayEmail(name,email,scoreEmail)  
                
    } catch (error) {
        displayMessageerror(error.message)
    }   
     
}


/**
 * start the game
 * @returns a sentence indicating the user’s score
 */
function launchGame() {     
    
    // initialization of event management
    initAddEventListenerPopup()   

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

    let form = document.querySelector("form")    

    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        manageForm(scoreEmail)
    })    
    
   
    // score display
    displayresult(score,i)   
}





 





