let score = 0

function displayresult(score,totalWord){    
    return message = "Vous avez " + score + " sur " +totalWord;
}

function choiceSentencesOrWords(){

    return choice = prompt("voulez jouer avec des mots ou des phrases ? Taper mots ou phrases : ")

    while (choice !== "mots" && choice !== "phrases"){
        choice = prompt("Taper mots ou phrases : ")    
    }

    return choice;
}

function playLoop(arrayPropositions) {
    for (let i=0; i<arrayPropositions.length; i++){
        let wordproposed = prompt("Entre le mot : " +  arrayPropositions[i])
    
        if(wordproposed === arrayPropositions[i]){
            console.log("Bravo");
            score++
        }else{
            console.log("vous avez fait une erreur de frappe");
        }  
}

function launchPlay(params) {
    
}

let choice = prompt("voulez deviner des mots ou des phrases ? Taper mots ou phrases : ")
console.log(choice);

while (choice !== "mots" && choice !== "phrases"){
    choice = prompt("Taper mots ou phrases : ")    
}

if (choice === "mots"){
    for (let i=0; i<wordsToGuess.length; i++){
        let wordproposed = prompt("Entre le mot : " +  wordsToGuess[i])
    
        if(wordproposed === wordsToGuess[i]){
            console.log("Bravo");
            score++
        }else{
            console.log("vous avez fait une erreur de frappe");
        }        
    }
    
    console.log("Vous avez " + score + " sur " +sentencesToGuess.length);
}else {
    for (let i=0; i<sentencesToGuess.length; i++){
        let wordproposed = prompt("Entre le mot : " +  sentencesToGuess[i])
    
        if(wordproposed === sentencesToGuess[i]){
            console.log("Bravo");
            score++
        }else{
            console.log("vous avez fait une erreur de frappe");
        }        
    }
    
    console.log("Vous avez " + score + " sur " +sentencesToGuess.length);
}


