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
    localStorage.removeItem(noteObj.myId);
  }
  updateLocal(noteObj) {
    this.deleteLocal(noteObj);
    this.addLocal(noteObj);
  }
  // takes an array and puts all the notes as values in that array.
  retrieveLocal(array = []) {
    let keys = noteObj.keys(localStorage);
    keys.forEach((value) => {
      array.push(JSON.parse(value));
    });
  }
}

const local = new storeLocal();
noteObj.freeze(local);
export default local;
