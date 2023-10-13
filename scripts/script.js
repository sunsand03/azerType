// variable initialization
let startTime
let endTime


/**
 * displays a message to the user
 * @param number score 
 * @param number totalWords 
 */
function displayresult(score,totalWords){    
   let spanScore =  document.querySelector(".zoneScore span") 

   let htmlScore = `${score} / ${totalWords}`
   spanScore.innerText = htmlScore
}

/**
 * displays the proposition to the user (sentences or words)
 * @param string proposition 
 */
function displayPropositions(proposition){
    let toGuess = document.querySelector(".zoneProposition")
    toGuess.innerText = proposition
}

/**
 * builds and displays the email. 
 * @param string name : the name of the player
 * @param string email : the email of the person with whom he wants to share his score
 * @param string score : the score of the game
 */
function displayEmail(name, email, score) {
    // build the mail
    let mailto = `mailto:${email}?subject=Partage du score AzerType&body=Salut, je suis ${name} et je viens de réaliser le score de ${score} sur le site d'AzerType !`
    // Navigate to the mailto URL to display the mail
    location.href = mailto
}

/**
 * word length check (minimum 2 characters)
 * @param string name 
 * throws Error 
 */
function validateName(name) {    
    if (name.length < 2){
       throw new Error("le nom est trop court. ")
    }
       
}

/**
 * check of the format of the email address
 * @param string email 
 * throws Error
 */
function validateEmail(email) {
    let emailRegex = new RegExp("[a-z0-9.-_]+@+[a-z0-9.-_]+\\.+[a-z0-9.-_]+")
    if (!emailRegex.test(email)){
        throw new Error("l'email n'est pas valide. ")
    }
  
}

/**
 * displays errors to the user
 * @param string message 
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
 * manages form to share score
 * @param number scoreEmail 
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
 * Records the start time when the user starts typing
 * 
 */
function startTimer() {
    startTime = new Date()
    return startTime
}

/**
 * calculates the time elapsed during typing  
 * @returns difference between the current time and the start time
 */
function endTimer() {
    endTime = new Date()
    let timeDiff = endTime - startTime  //time in milliseconds
    return timeDiff
}

/**
 * calculates the write speed
 * @param number time 
 * @param number textLength 
 * @returns the speed rounded to the nearest integer
 */
function calculateSpeed(time, textLength) {
    let timeInSecond = time / 1000
    let speed = textLength/ timeInSecond
    return Math.round(speed)
}


/**
 * starts the game
 * @returns a sentence indicating the user’s score
 */
function launchGame() {     
    
    // initialization 
    initAddEventListenerPopup() 
    let score = 0    
    let i = 0
    let totalspeed = 0
    let speedCount = 0

    // by default, words are proposed
    let listproposition = wordsToGuess
    
    // recovers of the validation button and the input field
    let buttonValidate = document.getElementById("btnValidateWord")
    let inputWriting = document.getElementById("inputWriting")

    displayPropositions(listproposition[i])

    inputWriting.addEventListener("input", ()=>{
        if(!startTime){
            startTimer()
        }
    })

    // recovers of the value entered at the click of the button
    buttonValidate.addEventListener("click", () =>{
            
        // updates of the score in case of correct answer
        if (inputWriting.value === listproposition[i]){                
            score++                
        }      
        i++
        displayresult(score,i)
            
            
        let timeElapsed = endTimer()
        let textLength = inputWriting.value.length
        let speed = calculateSpeed(timeElapsed,textLength)
        totalspeed += speed
        speedCount++
            
        let speedElement = document.getElementById("speedElement")

        if (!speedElement){
            let zoneScore = document.querySelector(".zoneScore")
            speedElement = document.createElement("p")
            speedElement.id = "speedElement"            
            zoneScore.appendChild(speedElement)
        }

        speedElement.innerText = `Vitesse de frappe : ${speed} caractères par secondes`
           
        startTime = null

        inputWriting.value = ""  
            
        // end of the game when the word list is complete
        if(listproposition[i] === undefined){
            displayPropositions("Le jeu est fini")
            buttonValidate.disabled = true
            let averageSpeed = totalspeed/speedCount            
            let zoneScore = document.querySelector(".zoneScore")
            let displayAverageSpeed = document.createElement("p")
            displayAverageSpeed.innerText = `Vitesse moyenne: ${averageSpeed} caractères par seconde`
            zoneScore.appendChild(displayAverageSpeed)
        }else{
                displayPropositions(listproposition[i])
        }  

    })

    //recoverys of the radio button
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

    // prevents reload of the page and displays the score
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        let scoreEmail = `${score} / ${i}`
        manageForm(scoreEmail)
    })
       
    // score display
    displayresult(score,i)
}  


