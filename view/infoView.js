class InfoView{

    #xJatekosNev="X Játékos";
    #OJatekosNev="O Játékos";
    #szuloElem
    constructor(szuloElem){
        this.#szuloElem=szuloElem;
        this.inicializalas();
        this.jatekosNevEvent();
    }

    inicializalas(){
        const txt = `
        <div>
        <textarea rows="1" cols="45" placeholder="X játékos" class="xjatekos"></textarea>
        <textarea rows="1" cols="45" placeholder="O játékos" class="ojatekos"></textarea>
        </div>
        <textarea readonly rows="1" cols="45" class="kiiras"></textarea>
        `;
        this.#szuloElem.append(txt)
    }

    jatekosNevEvent(){
        $('.xjatekos').on("keyup", (event)=>{
            this.#xJatekosNev = event.target.value;
        })
        $('.ojatekos').on("keyup", (event)=>{
            this.#OJatekosNev = event.target.value;
        })
    }

    kovetkezoJatekosKiir(kovetkezo){
        let kiiras=$('.kiiras')
        kiiras.html('')
        if(kovetkezo === "X"){
            kiiras.append(this.#xJatekosNev + " következik")
        }
        else if(kovetkezo ==="O"){
            kiiras.append(this.#OJatekosNev + " következik")
        }
    }

    gyoztesKiir(gyoztes){
        let kiiras=$('.kiiras')
        kiiras.html('')
        if(gyoztes === "X"){
            kiiras.append(this.#xJatekosNev + " nyert")
        }
        else if(gyoztes ==="O"){
            kiiras.append(this.#OJatekosNev + " nyert.")
        }
        else{
            kiiras.append("Döntetlen")
        }
    }
}
export default InfoView