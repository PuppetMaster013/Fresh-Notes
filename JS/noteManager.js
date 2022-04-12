
    class noteManager{
        constructor(){
            this.noteList = []
        }

        addNote(note){
            this.noteList.push(note)
        }

        placeNotes(parent){
            this.noteList.forEach(note=>{
                parent.append(note);
            })
        }
        
        

        test(){
            console.log(this.Allnotes);
        }
    }