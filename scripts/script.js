/**
 * displays a message to the user
 * @param {*} score 
 * @param {*} total 
 */
function displayresult(score,total){    
   console.log("Vous avez " + score + " sur " + total)   
}

/**
 * asks the user if he/she wants to play with words or phrases
 * @returns choice of the user
 */
function choiceSentencesOrWords(){

    let choice = prompt("voulez jouer avec des mots ou des phrases ? Taper mots ou phrases : ")

    while (choice !== "mots" && choice !== "phrases"){
        choice = prompt("Taper mots ou phrases : ")    
    }

    return choice
}

/**
 * displays the words or phrases to type and calculates the score
 * @param {*} arrayPropositions 
 * @returns score of the user
 */
function playLoopGame(arrayPropositions) {
    let score = 0
    for (let i=0; i<arrayPropositions.length; i++){
        let wordproposed = prompt("Entre le mot : " +  arrayPropositions[i])    
        if(wordproposed === arrayPropositions[i]){
            console.log("Bravo");
            score++
        }else{
            console.log("vous avez fait une erreur de frappe");
        }  
    }    
    return score
}

/**
 * start the game
 * @returns a sentence indicating the user’s score
 */
function launchGame() {
    let choice = choiceSentencesOrWords()
    let score = 0
    let total = 0

    if (choice === "mots"){
        score = playLoopGame(wordsToGuess)
        total = wordsToGuess.length
    }else{
        score = playLoopGame(sentencesToGuess)
        total = sentencesToGuess.length
    }

    return displayresult(score,total)
}



