import styles from "./styles.css"

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

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            this.shadowRoot.innerHTML+=`
               <section class="searchCont">
               <input id="search" type="text" placeholder="Search...">
               <img src="/img/lupe.png" class="searchIcon">
               <img src="/img/cogAlt.png" class="searchIcon">
               </section>
              `;
            }
    }
}
customElements.define("search-bar",SearchBar)