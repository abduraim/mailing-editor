import Section from './section';
import Tag from "../core/tag";

export default class Body extends Tag{

    constructor() {
        super();
        this.tagName = 'body';
        this.width = null;
        this.backgroundColor = null;
        this.cssClass = null;
    }

    template(){
        return '<mj-' + this.tagName + '></mj-' + this.tagName + '>';
    }

}