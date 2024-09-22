class gridView{
    szuloElem
    constructor(szuloElem){
        this.szuloElem=szuloElem;
        this.#kezdesKirajzol();
        this.#sajatEsemeny();
    }

    #sajatEsemeny(){
        let kockak=$(".kocka");
        /* controller-be átmenjünk, amikor ez lefut*/
        kockak.on("click", (event)=> {
            /*console.log(event.target.id); click eventje*/

            /* minden clicknél létrehozunk egy kivalaszt eseményt */
            const myEvent= new CustomEvent("kivalaszt", {detail:event.target.id});
            window.dispatchEvent(myEvent);
        })
    }

    #kezdesKirajzol(){
        let txt="";
        for (let i = 0; i< 9; i++) {
            txt+= `<div class="kocka" id="${i}"></div>`
        }
        this.szuloElem.append(txt)
    }

    szimbolumokKirajzol(index, szimbolum){
        let kocka= $(`#${index}`)[0]
        /*console.log(kocka)*/
        kocka.append(szimbolum)
    }

    nyerteskockak(indexek){
        indexek.forEach(idx => {
            const kocka = $(`#${idx}`);
            kocka.addClass('winner');
        });
    }
}
export default gridView;