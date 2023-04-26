import styles from "./styles.css"

class SignUp extends HTMLElement {

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
                <h1>Sign Up On Twitter</h1>
                <input type="text" placeholder="Username"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Confirm Password"></input>
                <p>If you already have an account, <a>log in.</a></p>
            </div>
        </section>
        `
    }
}

customElements.define('sign-up', SignUp)
export default SignUp