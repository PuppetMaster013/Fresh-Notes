class utilityC{
    constructor(){
    }
    static addElement(tag,itsClass,content){
        let element = document.createElement(tag)
        element.className(itsClass)
        element.innerText(content)
        return element
    }
}