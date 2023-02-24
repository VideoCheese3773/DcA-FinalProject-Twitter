class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback(){
        this.render();
    }

    render() {
        const btn = document.createElement('button')
        btn.textContent = 'este es el btn'
        this.shadowRoot.appendChild(btn)
    }
}

customElements.define('app-button', Button)