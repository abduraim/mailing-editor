export default class Pallete {

    constructor(Dashboard, tagId){

        this.Dashboard = Dashboard;
        this.tagId = tagId;

        this.container = document.createElement('aside');
        this.container.className = 'tools';
        this.container.innerHTML = '<button>Add MJML</button>';
        document.getElementById(this.tagId).appendChild(this.container);
        this.toolsInit();
    }

    toolsInit(){

        let self = this;

        this.container.addEventListener('click', function (event) {
            self.Dashboard.addMjml();
        });
    }

}