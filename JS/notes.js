

export default class Note {
  static count = 0;
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.myId = `note-${this.title}-${Note.count}`;
    Note.count += 1;
    // this.noteElement = null;
    this.state = "active";
  }
}
