import "./components/index.js"

class AppContainer extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <left-menu></left-menu>
        <mid-menu></mid-menu>
        <right-menu></right-menu>
        `
    }
}

customElements.define('app-container', AppContainer)