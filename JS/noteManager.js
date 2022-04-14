import note from "./notes.js";
import local from "./storeLocal.js";
import container from "./container.js";
import utility from "./utility.js";

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
    this.noteContainer.placeOnDom(this.createElement(this.archiveEvent,noteObj));      
    });
  }
  }
  addNote() {
      this.addBtn.addEventListener('click',()=>{
        let noteTitle = document.querySelector("#note-title-box").value;
        let noteContent = document.querySelector("#note-content-box").value;
        let addedNote = new note(noteTitle, noteContent);
        this.noteContainer.placeOnDom(this.createElement(this.archiveEvent,addedNote));
        noteManager.noteObjArr.push(addedNote)
        local.addLocal(addedNote);
      })
  }
  createElement(func,objNote) {
    // utility.addElement()
    let element = utility.addElement("div", "note", "");
    element.setAttribute("id", objNote.myId);
    let crossBtn = utility.addElement("button", "crossBtn", "⛔");
    let noteHeading = utility.addElement("h2", "note-heading", objNote.title);
    let noteContent = utility.addElement("div", "content", objNote.content);
    crossBtn.addEventListener("click", func);
    element.append(crossBtn);
    element.append(noteHeading);
    element.append(noteContent);
    return element;
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


