import Model from "../model/model.js";
import gridView from "../view/gridView.js";
import InfoView from "../view/infoView.js";

class Controller{
    #view
    #model
    #infoView
    constructor(){
        
        this.#view = new gridView($('.jatekter'));
        this.#infoView = new InfoView($('.info'))
        this.#model = new Model();
        this.#kivalasztasEvent();
        this.#infoView.kovetkezoJatekosKiir("X");
    }

    #kivalasztasEvent(){
        $(window).on("kivalaszt", (event)=>{
            /* hogy tudjuk melyikre kattintottunk a controllerben*/
            /*console.log(event.detail)*/
            if(this.#model.getvegeVan()) return; /* kilép az eventből, ha nyertek és maradt üres mező*/

            let szimbolum =this.#model.berak(event.detail); /* kirakjuk külön változóba a return értékét*/
            if(szimbolum !== ""){
                this.#infoView.kovetkezoJatekosKiir(this.#model.getSzimbolum());
                
                /*console.log("Döntetlen-e: " +this.#model.dontentetlenE());*/
                this.#view.szimbolumokKirajzol(event.detail, szimbolum);
                const nyerteskockak = this.#model.nyertE();

                if(nyerteskockak.length > 0){ /* ha nem nyert senki akkor üres tömböt ad vissza, ha meg nyert valaki, akkor benne van 3 kocka indexe a tömbbe*/
                    this.#infoView.gyoztesKiir(szimbolum)
                    this.#view.nyerteskockak(nyerteskockak)
                }
                if(this.#model.dontentetlenE()) this.#infoView.gyoztesKiir("Döntetlen");
            }
            
        })
    }
}
export default Controller;