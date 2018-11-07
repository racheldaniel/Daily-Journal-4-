/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

*/

API.getJournalEntries().then(DOM.renderJournalEntries)


// function to create entry upon submission
document.addEventListener("submit", (e) => {
  // prevent page from reloading
  e.preventDefault();
  // assign input to variables
  formFunctions.storeSubmission()
})

//add an event listener for radio buttons to filter entries

const filterMood = document.querySelector(".filter")

filterMood.addEventListener("click", (e) => {
  let mood = e.target.value
  console.log(mood)
  let entries = document.querySelectorAll("section")
  if (mood) {
    entries.forEach((entry) => {
      let moodText = $(entry).find(".mood").text()
      if (moodText.includes(mood) || mood === "all" ) {
        $(entry).removeClass("hidden")
      } else {
        $(entry).addClass("hidden")
      } 
    })
  }

})