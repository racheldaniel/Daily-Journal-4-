// component object will hold functions for building dom components
//sectionChildren function takes an entry object and creates html component

const component = {
  sectionChildren(object) {
    let html = `
      <h3 class="date">${object.date}</h3>
      <p class="concepts">${object.concepts}</p>
      <p class="entry">${object.entry}</p>
      <p class="mood">${object.mood}</p>
      `
    return html
  }
}