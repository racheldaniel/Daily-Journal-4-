// DOM object will contain functions for manipulating the DOM
// renderJournalEntries function iterates through array of entries and calls component creation function to build element, then appends each to the DOM

const DOM = {
  renderJournalEntries (array) {
    array.forEach((object) => {
      const journal = document.getElementsByClassName("journal")[0]
      const section = document.createElement("section")
      journal.appendChild(section)
      const html = component.sectionChildren(object)
      section.innerHTML += html
    })
  }
}





//ALL OF THE FOLLOWING CODE IS MOOT UNTIL THE NEXT JOURNAL CHAPTER-- CURRENTLY USING DUMMY JSON ENTRY
// set choices of moods for later selection

const moodChoices = document.getElementById("moodChoices");

// listen for form submission
document.addEventListener("submit", (e) => {
  // prevent page from reloading
  e.preventDefault();
  // assign input to variables
  let journalDate = document.getElementById("journalDate");
  let concepts = document.getElementById("concepts");
  let journalEntry = document.getElementById("journalEntry");
  let dailyMood = moodChoices.options[moodChoices.selectedIndex];

  //create an object with the input values
  let currentEntry = {
    date: journalDate.value,
    concepts: concepts.value,
    entry: journalEntry.value,
    mood: dailyMood.value,
  }

  let date = ("Date: " + currentEntry.date);
  let conceptsLearned = ("Concepts Covered: " + currentEntry.concepts);
  let journalEntryText = currentEntry.entry;
  let mood = ("I'm Feeling: " + currentEntry.mood);

  //  reset form
  journalDate.value = " "
  concepts.value = " "
  journalEntry.value = " "
  moodChoices.selectedIndex = document.getElementById("moodChoices").firstElementChild

})

