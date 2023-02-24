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
        const section = document.createElement('section');
        const title = document.createElement('h2');

        title.textContent = 'This is the title'

        section.appendChild(title)

        this.shadowRoot.appendChild(section)
    }
}

customElements.define('app-container', AppContainer)