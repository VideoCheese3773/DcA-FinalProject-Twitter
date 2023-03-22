class RightMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML=`
        <h1>New on twitter?</h1>
        <h3>plz don't do this to yourself</h3>
        <h1>this should be a button</h1>
        <p>maybe it's better for us to no make these containers as components for the time being</p>
        `
    }
}

customElements.define('right-menu', RightMenu)