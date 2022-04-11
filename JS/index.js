console.log('This is live')
// const searchBox = document.getElementById('search-box')

const createNoteBtn = document.querySelector('.add-note-btn')
let parent = document.querySelector('.note-container')


class Note {
    constructor(title,content){
        this.title = title
        this.content = content
    }

     createNote() {
        let note = document.createElement('div')
        note.className = 'note'
        let heading = document.createElement('h2')
        heading.className = 'note-heading'
        heading.innerText = this.title
        let noteText = document.createElement('div')
        noteText.className = 'content'
        noteText.innerText = this.content
        note.append(heading)
        note.append(noteText)
        return note;
    }

    pasteNote(_parent){
        _parent.append(this.createNote())
    }

    deleteNote(){

    }
}

let note1 = new Note('hello world','also some extra stuff with hello world')
createNoteBtn.addEventListener('click',()=>{
   let noteTitle = document.getElementById('note-title-box').value;
   let noteContent = document.getElementById('note-content-box').value;
   let note2 = new Note(noteTitle,noteContent);
   note2.createNote();
   console.log(parent)
   note2.pasteNote(parent)
})