import Model from "../model/model.js";
import gridView from "../view/gridView.js";

class Controller{
    #model
    constructor(){
        new gridView($(".jatekter"));
        this.#kivalasztasEvent();

        this.#model = new Model();
    }

    #kivalasztasEvent(){
        $(window).on("kivalaszt", (event)=>{
            /* hogy tudjuk melyikre kattintottunk a controllerben*/
            console.log(event.detail)
            
        })
    }
}
export default Controller;