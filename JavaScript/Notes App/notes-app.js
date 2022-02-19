const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText')
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

showNotes();
//....
setTimeout(() => {
    console.log('Set timeout function called after 1 sec')
}, 1000)

// ....
//add notes Event
addNoteButton.addEventListener('click', () => {
    if (addTitle.value === '') {
        return alert('Give title to note');
    }
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

// showNotes()
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
        notesDiv.innerHTML = `You don't have notes, Create first`;
        return;
    }
    let notesObj = JSON.parse(notes);
    let addNotes = '';
    for (let i = 0; i < notesObj.length; i++) {
        addNotes += `
        <div class="col-sm-4">
        <div class="card mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${notesObj[i].Title}</h5>
                    <p class="card-text">${notesObj[i].Text}</p>
                    <button id="${i}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
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
    console.log(notes[i]);
    notes.slice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}