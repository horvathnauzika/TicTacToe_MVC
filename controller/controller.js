import Model from "../model/model.js";
import gridView from "../view/gridView.js";

class Controller{
    #view
    #model
    constructor(){
        this.#view = new gridView($('.jatekter'));
        this.#model = new Model();
        this.#kivalasztasEvent();
        
    }

    #kivalasztasEvent(){
        $(window).on("kivalaszt", (event)=>{
            /* hogy tudjuk melyikre kattintottunk a controllerben*/
            /*console.log(event.detail)*/
            if(this.#model.getvegeVan()) return; /* kilép az eventből, ha nyertek és maradt üres mező*/

            let szimbolum =this.#model.berak(event.detail); /* kirakjuk külön változóba a return értékét*/
            if(szimbolum !== ""){
                /*console.log("Döntetlen-e: " +this.#model.dontentetlenE());*/
                this.#view.szimbolumokKirajzol(event.detail, szimbolum);
                const nyerteskockak = this.#model.nyertE();
                if(nyerteskockak.length > 0){
                    this.#view.nyerteskockak(nyerteskockak)
                }
            }
            
        })
    }
}
export default Controller;