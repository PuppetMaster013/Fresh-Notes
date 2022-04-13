export default class noteContainer {

  //Root parent which will be the parentNode of all the notes on DOM
  
  constructor(rootElement) {
    this.rootElement = rootElement;
  }
  //Adds the noteElement(as a div) to the rootElement

  placeOnDom(noteElement) {
    this.rootElement.append(noteElement);
  }
  //Removes the noteElement from the dom

  removeFromDom(noteElement) {
    this.rootElement.removeChild(noteElement);
  }
  //Hides the noteElement from the DOM without removing it   

  hideFromDom(noteElement) {
    noteElement.style.display = "none";
  }
}
