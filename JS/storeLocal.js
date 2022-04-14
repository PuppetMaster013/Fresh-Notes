class storeLocal {
  constructor() {
    //   singleton, if there's no instance this would make one, if there's one, it will return
    //   that one
    if (storeLocal.instance == null) {
      storeLocal.instance = this;
    }
    return storeLocal.instance;
  }
  //   adds the note(as an noteObj) to the localStorage after stringifying it
  //   the notes themselves have the 
  addLocal(noteObj) {
    localStorage.setItem(noteObj.myId, JSON.stringify(noteObj));
  }
  // removes the note from the localStorage.
  deleteLocal(noteObj) {
    console.log(noteObj);
    localStorage.removeItem(noteObj);
  }
  updateLocal(noteObj) {
    this.deleteLocal(noteObj);
    this.addLocal(noteObj);
  }
  // takes an array and puts all the notes as values in that array.
  retrieveLocal(array) {
    let keys = Object.keys(localStorage);
    // console.log(localStorage.getItem(keys[0]));
    keys.forEach(key=>{
      array.push(JSON.parse(localStorage.getItem(key)));
    })
  }
  
}

const local = new storeLocal();
Object.freeze(local);
export default local;
