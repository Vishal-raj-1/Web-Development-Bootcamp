const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText')
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

showNotes();

addNoteButton.addEventListener('click', () => {
    if (addText.value === '') {
        return alert('Note is empty, Please write first')
    }
    let notes = localStorage.getItem('notes');
    let notesObj;

    if (notes === null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }

    if (addTitle.value === '') {
        addTitle.value = `Note ${notesObj.length + 1}`
    }
    let note = {
        Title: addTitle.value,
        Text: addText.value
    }

    notesObj.push(note);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTitle.value = '';
    addText.value = '';
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        return;
    }
    let notesObj = JSON.parse(notes);
    let addNotes = '';
    for (let i = 0; i < notesObj.length; i++) {
        addNotes += `
                <div class="note">
                    <h5 class="title">${notesObj[i].Title}</h5>
                    <p class="text">${notesObj[i].Text}</p>
                    <button id="${i}" onclick="deleteNote(${i})" class="deleteNote">Delete</button>
                </div>`;
    }
    notesDiv.innerHTML = addNotes;
}

function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }
    notes = JSON.parse(notes);
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}