export default class Note {
    constructor(title,content,parent){
        this.parent = parent
        this.title = title
        this.content = content
        this.crossBtn = document.createElement('button')
        this.crossBtn.className = "crossBtn"
        this.crossBtn.innerText = '⛔'
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

        note.append(this.crossBtn)
        note.append(heading)
        note.append(noteText)
        return note;
    }
    //Adds the note to the DOM in the element note-container
    pasteNote(){
        this.parent.append(this.createNote()) 

    }
    // deletes the note
    deleteNote(){
        this.crossBtn.addEventListener('click',(e)=>{
            console.log(e.target)
            })
        }

    }

