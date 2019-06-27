import Mjml from './classes/mjml';
import Pallete from './tools-pallete/pallete';

export default class Dashboard {

    constructor(){

        // Добавляем Палитру инструментов
        this.Pallete = new Pallete(this, 'tools-pallete');

    }

    // Добавляем MJML в редактор
    addMjml(){

        if (!this.Mjml) {
            this.Mjml = new Mjml();
            this.Mjml.renderCodeToConsole();
        }

    }

}