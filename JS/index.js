import Note from './notes.js'

console.log('This is live')

// const searchBox = document.getElementById('search-box')
// this is the add note button whose click event add the note to the container
const createNoteBtn = document.querySelector('.add-note-btn')
//This is the container whose children are going to be notes.
let parent = document.querySelector('.note-container')

//Class that maintains the properties and methods of a note like initialising values, creating
//childrens adding it to the DOM and deleting it.  


    
   

let note1 = new Note('hello world','also some extra stuff with hello world')
createNoteBtn.addEventListener('click',()=>{
   let noteTitle = document.getElementById('note-title-box').value;
   let noteContent = document.getElementById('note-content-box').value;
   let note2 = new Note(noteTitle,noteContent,parent);
   note2.createNote();
   note2.pasteNote();
   note2.deleteNote();
   
})
