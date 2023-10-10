/*************************************
 * This file contains all the functions necessary for display and 
 * closing the share popup. 
 ************************************/



/**
 * displays the popup to share the score
 */
function displayPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    // make the popup visible
    popupBackground.classList.add("active")
}

/**
 * hides the popup to share the score
 */
function hidePopup(){
    let popupBackground = document.querySelector(".popupBackground")
    // make the popup visible
    popupBackground.classList.remove("active")
}

/**
 * initializes event listeners that concern
 * the display of the popup 
 */
function initAddEventListenerPopup() {
   // We listen to the click on the "share" button
   let btnShare = document.querySelector(".zoneShare button")
   let popupBackground = document.querySelector(".popupBackground") 
   btnShare.addEventListener("click", ()=>{
    // when you click the button, the poupup appears
    displayPopup()
   })

   // We listen to the click on the div 
   popupBackground.addEventListener("click", (event)=>{
    // If you clicked on the popupBackground 
    // (and not another element that is in)
    if(event.target === popupBackground){
    // we hide the popup
        hidePopup()
    }
   })
}