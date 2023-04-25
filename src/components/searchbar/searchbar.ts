export default class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=""

        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <section class="searchCont">
        <input id="search" type="text" placeholder="Search...">
        <img src="./img/lupe.png" class="searchIcon">
        <img src="./img/cogAlt.png" class="searchIcon">
        </section>
        `;
        }
    }
}
customElements.define("search-bar",SearchBar)