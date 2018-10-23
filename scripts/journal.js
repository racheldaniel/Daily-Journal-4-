/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

*/

API.getJournalEntries().then(DOM.renderJournalEntries)


const moodChoices = document.getElementById("moodChoices");

// function to create entry upon submission
document.addEventListener("submit", (e) => {
  // prevent page from reloading
  e.preventDefault();
  // assign input to variables
  const journalDate = document.getElementById("journalDate");
  const concepts = document.getElementById("concepts");
  const journalEntry = document.getElementById("journalEntry");
  const dailyMood = moodChoices.options[moodChoices.selectedIndex];


  const acceptableChars = [ " ", ".", ",", "!", "'", "?", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "(", ")", "{", "}", ":", ";", "\""]

  const entryChars = concepts.value + journalEntry.value + dailyMood.value
  let correctChars = true

  for (i = 0; i < entryChars.length; i++) {
    if (acceptableChars.indexOf(entryChars[i].toLowerCase()) === -1) {
      correctChars = false
    } 
  }

  if (dailyMood.value === "select") {
    alert("Please select a current mood before submitting")
  } else if (correctChars === false) {
    alert("Please do not use non-alphabetic, non-numeric characters other than basic punctuation, (), {}, : or ;")
  } else {
   //create an object with the input values
    let currentEntry = {
      date: journalDate.value,
      concepts: concepts.value,
      entry: journalEntry.value,
      mood: dailyMood.value
    }
    //add new entry to API, then post to the DOM
    API.saveJournalEntry(currentEntry).then(DOM.renderJournalEntries)


    //  reset form
    journalDate.value = " "
    concepts.value = " "
    journalEntry.value = " "
    moodChoices.selectedIndex = document.getElementById("moodChoices").firstElementChild
  

  } 
})