import note from "./notes.js";
import local from "./storeLocal.js";
import container from "./container.js";

export default class noteManager {

    static noteObjArr = [];
  constructor() {
   
      this.addBtn = document.querySelector(".add-note-btn");
      this.noteCont = document.querySelector(".note-container");
      local.retrieveLocal(noteManager.noteObjArr);
      this.noteContainer = new container(this.noteCont);
      this.initialize();
      this.addNote();
   
  }
  initialize() {
    if(noteManager.noteObjArr.length > 0) {
    noteManager.noteObjArr.forEach((noteObj) => {
    this.noteContainer.placeOnDom(noteObj.createElement(this.archiveEvent));      
    });
  }
  }
  addNote() {
      this.addBtn.addEventListener('click',()=>{
        let noteTitle = document.querySelector("#note-title-box").value;
        let noteContent = document.querySelector("#note-content-box").value;
        let addedNote = new note(noteTitle, noteContent);
        this.noteContainer.placeOnDom(addedNote.createElement(this.archiveEvent));
        noteManager.noteObjArr.push(addedNote)
        local.addLocal(addedNote);
      })
  }
  archiveEvent(e){
    noteManager.noteObjArr.forEach((noteObj) => {
      if(noteObj.myId == e.target.parentNode.id)
      {
        console.log(noteObj.myId)
        local.deleteLocal(noteObj.myId);
      }
    })
     e.target.parentNode.parentNode.removeChild(e.target.parentNode);
     local.deleteLocal()
    //  e.target.parentNode
    //  local.deleteLocal()
  }
}


