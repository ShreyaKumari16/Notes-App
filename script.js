const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

window.onload = () => {
  renderNotes();
};

addNoteBtn.addEventListener('click', () => {
  const noteText = noteInput.value.trim();
  if (noteText) {
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    renderNotes();
  }
});

function renderNotes() {
  notesContainer.innerHTML = '';
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `
      ${note}
      <button class="delete-btn" onclick="deleteNote(${index})">✖</button>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes();
}