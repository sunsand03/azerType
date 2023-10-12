/***************************************************
 * this file contains the words and sentences to guess
 *
 **************************************************/

/**
 * choices randomly in an array
 * @param array values 
 * @param number count 
 * @returns 
 */
function getRandom(values, count) {
    // creates a copy of the original table
    let tempArray = [...values]
    let result = []

    for (let i = 0; i<count;i++ ){
      // Chooses a random index
      const randomIndex = Math.floor(Math.random()*tempArray.length)  
      // Takes an array element to this index
      result.push(tempArray[randomIndex])
      // Removes the item from the temporary array to avoid duplicates
      tempArray.splice(randomIndex,1)      
    }

    return result
}


// list of guessing words
const DicoWordsToGuess = ["Parallèle", "Dilemme","Cachalot","Pétunia","Serviette", "Accueil", "Kouign amann", "Reblochon", "Rhododendron", "Trottinette", "érudit", "chevalet", "clapotis", "ébène", "luthier", "triolet", "diapason", "dédale","Amphibologie",
"Anticonstitutionnellement","Cacatoès","Caparaçon","Curriculum vitae","Effréné","Éthylique","Hippopotame","Indivisibilité","Labyrinthe","Millefeuille","Pneumonie","Psychologie","Quinquennat","Réminiscence","Symétrie","Tragédienne","Vénéneux","Xylophone",
"Zizanie"]

// random choice of ten words
const wordsToGuess = getRandom(DicoWordsToGuess,10)

// list of guessing sentences
const DicoSentencesToGuess = [
    "On ne fait pas d'omelettes sans casser d'oeufs",
    "On ne change pas une équipe qui gagne.",
    "Fais ce que je dis, ne fais pas ce que je fais.",
    "Il est facile de nager quand on vous tient le menton.",
    "Il ne faut pas jeter le bébé avec l'eau du bain.",
    "Jeu de main, jeu de vilain.",
    "Ce sont les tonneaux vides qui font le plus de bruit.",
    "Mieux vaut être seul que mal accompagné.",
    "On est jamais mieux servi que par soi-même.",
    "Qui vole un oeuf vole un boeuf.",
    "L'habit ne fait pas le moine.",
    "Chassez le naturel, il revient au galop.",
    "Qui sème le vent récolte la tempête.",
    "Mieux vaut tard que jamais.",
    "Petit à petit, l'oiseau fait son nid.",
    "Tout ce qui brille n'est pas or.",
    "Chat échaudé craint l'eau froide.",
    "Qui veut la fin veut les moyens.",
    "Après la pluie, le beau temps.",
    "Au royaume des aveugles, les borgnes sont rois.",
    "C'est en forgeant qu'on devient forgeron.",
    "Il ne faut pas mettre tous ses œufs dans le même panier.",
    "L'exception confirme la règle.",
    "Qui vivra verra.",
    "Rien ne sert de courir, il faut partir à point.",
    "Tout vient à point à qui sait attendre.",
    "Chaque chose en son temps.",
    "La nuit, tous les chats sont gris.",
    "À cœur vaillant, rien d'impossible.",
    "Il n'y a pas de fumée sans feu."
]

// random choice of ten sentences
const sentencesToGuess = getRandom(DicoSentencesToGuess,10)
