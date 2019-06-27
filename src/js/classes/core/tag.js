export default class Tag {

    constructor(){
        this.tagName = 'tag';
        this.innerElements = [];
    }

    // Добавляем внуть элемент
    addElement(element){
        this.innerElements.push(element);
    }

    // Возвращает срендеренный элемент
    getContent(){

        let resultStr = '<mj-' + this.tagName + '>';

        this.innerElements.forEach(function (element) {
            resultStr += element.getContent();
        });

        resultStr += '</mj-' + this.tagName + '>';

        return resultStr;
    }

    // Возвращает массим внутренних элементов
    getElements(){
        return this.innerElements;
    }



}