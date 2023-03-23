class LeftMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <section class="leftMenuSection">
            <div>
                <img src="./img/twitterLogo.png" class="menuIcon">
                <h1>Home</h1>
            </div>
            <div>
                <img src="./img/hashtag.png" class="menuIcon">
                <h1>Explore</h1>
            </div>
            <div>
                <img src="./img/cog.png" class="menuIcon">
                <h1>Configuration</h1>
            </div>
        </section>
        `
    }
}

customElements.define('left-menu', LeftMenu)
export default LeftMenu