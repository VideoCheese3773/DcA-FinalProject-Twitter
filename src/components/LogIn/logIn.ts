import styles from "./styles.css"

class LogIn extends HTMLElement {

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
        this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("styles");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <link rel="stylesheet" href="./index.css">
        <section>
            <div>
                <p>X</p>
                <img src="./img/twitterLogo.png">
                <h1>Log In On Twitter</h1>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <p>If you don't have an account, <a>Sign Up.</a></p>
                <button>Log In</button>
            </div>
        </section>
        `
    }
}

customElements.define('log-in', LogIn)
export default LogIn