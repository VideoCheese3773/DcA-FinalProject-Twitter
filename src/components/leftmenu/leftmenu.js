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
        <h1>Home</h1>
        <h1>Explore</h1>
        <h1>Configuration</h1>
        `
    }
}

customElements.define('left-menu', LeftMenu)