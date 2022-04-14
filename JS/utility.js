export default class utilityC{
    constructor(){
    }
    static addElement(tag,itsClass,content){
        let element = document.createElement(tag);
        element.className = itsClass;
        element.innerText= content;
        // if(itsClass == "note-heading"||itsClass == "content"){
        //     element.setAttribute("contenteditable","true")
        // }
        return element;
    }
}