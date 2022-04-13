import utility from "./utility.js";

export default class Note {
  static count = 0;
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.myId = `note-${this.title}-${count}`;
    count += 1;
    this.noteElement = null;
    this.state = "active";
  }

  createElement(func) {
    // utility.addElement()
    let element = utility.addElement("div", "note", "");
    element.setAttribute("id", `note${count - 1}`);
    let crossBtn = utility.addElement("button", "crossBtn", "⛔");
    let noteHeading = utility.addElement("h2", "note-heading", this.title);
    let noteContent = utility.addElement("div", "content", this.content);
    crossBtn.addEventListener("click", func);
    element.append(crossBtn);
    element.append(noteHeading);
    element.append(noteContent);
    this.noteHeading = element;
    return this.noteHeading;
  }
}
