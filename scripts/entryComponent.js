const domComponent = (object) => {
  const journal = document.getElementsByClassName("journal")[0]
  const section = document.createElement("section")
  journal.appendChild(section)
  let html = `
  <h3 class="date">${object.date}</h3>
  <p class="concepts">${object.concepts}</p>
  <p class="entry">${object.entry}</p>
  <p class="mood">${object.mood}</p>
  `
  section.innerHTML += html
}
