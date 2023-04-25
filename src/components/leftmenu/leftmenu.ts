class LeftMenu extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        if (this.shadowRoot) {
            this.render()
        }
    }

    render() {
        this.shadowRoot!.innerHTML = `
        <link rel="stylesheet" href="./index.css">
        <section class="leftMenuSection">
            <div class="leftMenuItem">
                <img src="./img/twitterLogo.png" class="menuIcon">
                <h1 class="leftMenuText selectedItem">Home</h1>
            </div>
            <div class="leftMenuItem">
                <img src="./img/hashtag.png" class="menuIcon">
                <h1 class="leftMenuText">Explore</h1>
            </div>
            <div class="leftMenuItem">
                <img src="./img/cog.png" class="menuIcon">
                <h1 class="leftMenuText">Configuration</h1>
            </div>
        </section>
        `
    }
}

customElements.define('left-menu', LeftMenu)
export default LeftMenu