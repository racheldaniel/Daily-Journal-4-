//pasted per journal entry 4 instructions
const API = {
  getJournalEntries() {
    return fetch("http://localhost:8088/entries")
      .then(response => response.json())
  }
}


