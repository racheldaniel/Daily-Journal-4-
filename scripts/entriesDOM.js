// DOM object will contain functions for manipulating the DOM
// renderJournalEntries function iterates through array of entries and calls component creation function to build element, then appends each to the DOM

const DOM = {
  renderJournalEntries (array) {
    // const journal = $(".journal")
    $(".journal").html("")
    array.forEach((object) => {
      const section = document.createElement("section")
      $(".journal").append(section)
      const html = component.sectionChildren(object)
      section.innerHTML += html
    })
  }
}

