//pasted per journal entry 4 instructions
const API = {
  getJournalEntries () {
      let array = fetch("http://localhost:8088/entries")
      .then(response => response.json())
      return array
  }
}


