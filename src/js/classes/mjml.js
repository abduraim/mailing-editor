import Body from './elements/body';
import Header from './elements/header';
import Tag from "./core/tag";

export default class Mjml extends Tag{

    constructor() {
        super();
        this.tagName = 'mjml';
        this.addElement(new Header());
        this.addElement(new Body());
    }

    // Возвращает срендеренный элемент (переопределяем наследуемый метод)
    getContent(){

        let resultStr = '<' + this.tagName + '>';

        this.innerElements.forEach(function (element) {
            resultStr += element.getContent();
        });

        resultStr += '</' + this.tagName + '>';

        return resultStr;
    }

    renderCodeToConsole(){
        console.log(this.getContent());
    }

}