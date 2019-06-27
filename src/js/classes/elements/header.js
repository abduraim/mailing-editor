import Tag from "../core/tag";
import Attributes from './attributes';

export default class Header extends Tag{

    constructor(){
        super();
        this.tagName = 'head';
    }

    // Добавляет элемент Атрибуты
    addAttributes(){
        this.addElement(new Attributes());
    }

}