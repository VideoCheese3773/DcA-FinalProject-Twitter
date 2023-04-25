export enum AttributeButton {
    "btn_text" = "btn_text",
    "counter" = "counter"
}

export default class Button extends HTMLElement {
    btn_text?: string = "0";
    counter?: number = 0;

    static get observedAttributes() {
        const attrs: Record<AttributeButton, null> = {
            btn_text: null,
            counter: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: string | undefined,
        newValue: any //before, it was: string | undefined
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = '';
        const button = this.ownerDocument.createElement('button');
        if (localStorage.getItem('count')) {
            let actualValue = localStorage.getItem('count');
            button.innerText = `${actualValue}`;
            this.counter = +actualValue!;
        }
        else {
            button.innerText = `${this.btn_text}`
        }
        button.addEventListener('click', () => {
            this.counter = this.counter! + 1;
            localStorage.setItem('count', this.counter.toString())
            button.innerText = `${this.counter}`
        })
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('app-button', Button)