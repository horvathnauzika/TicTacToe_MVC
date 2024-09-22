class Model{

    #lista=[];
    #szimbolum = "❌"
    #vegeVan = false;
    constructor(){
        this.#lista=[" "," "," "," "," "," "," "," "," ",];
    }

    berak(i){
        if(this.#lista[i] != " ") {
            return "";/* visszatérünk, ha már foglalt a mező */
        }
        this.#lista[i] = this.#szimbolum; /* beírjuk a listába a szimbólumot*/
        let visszateres = this.#szimbolum;
        if(this.#szimbolum==="❌"){
            this.#szimbolum="🟢"; /* Léptetjük a szimbólumot */
            console.log("🟢 játékos következik")
        }
        else{this.#szimbolum="❌" /* Léptetjük a szimbólumot*/
            console.log("❌ játékos következik")
        }
        return visszateres;
    }

    nyertE(){
        let nyert = []; /*átadja melyikek voltak a nyerőek */
        const egysorbanlevoindexek = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        egysorbanlevoindexek.forEach(indexek =>{

            /*let idx1 = indexek[0];
            let idx2 = indexek[1];
            let idx3 = indexek[2];/

            /*let elem1 = this.#lista[idx1]
            let elem2 = this.#lista[idx2]
            let elem3 = this.#lista[idx3]*/

            let elem1 = this.#lista[indexek[0]]
            let elem2 = this.#lista[indexek[1]]
            let elem3 = this.#lista[indexek[2]]

            if(elem1 === elem2 && elem2 === elem3 & elem1 !== " "){
                nyert=  [indexek[0], indexek[1], indexek[2]]
                this.#vegeVan=true;
            }
        })
        return nyert;
    }

    dontentetlenE(){
        if(!this.nyertE() && !this.#lista.includes(" ")){
            this.#vegeVan = true;
            return true;
        }
        return false;
    }

    getvegeVan(){
        return this.#vegeVan;
    }
}
export default Model;