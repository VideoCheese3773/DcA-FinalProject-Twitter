class SearchBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <div class="searchCont">
        <input id="search" type="text" placeholder="Search...">
        <img src="./img/lupe.png" class="searchIcon">
        <img src="./img/cogAlt.png" class="searchIcon">
        </div>
        `;
    }
}
customElements.define("search-bar",SearchBar)
export default SearchBar