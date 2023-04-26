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

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <section id="popUpMaster" class="popUp noShow">
            <div class="popUpBody">
                <div class="closeButtonContainer">
                    <p id="closePopUp">X</p>
                </div>
                <img src="/img/twitterLogo.png" class="menuIcon">
                <h1 class="banner">Log In On Twitter</h1>
                <input class="input" type="text" placeholder="Username"></input>
                <input class="input" type="password" placeholder="Password"></input>
                <button class="button">Log In</button>
                <p>If you don't have an account, <a class="logIn">Sign Up.</a></p>
            </div>
        </section>
        `

        const popUpMaster = this.shadowRoot!.getElementById('popUpMaster')
        const closePopUp = this.shadowRoot!.getElementById('closePopUp')
        closePopUp?.addEventListener('click', () =>{
            popUpMaster?.classList.add("noShow")
        })
    }
}

customElements.define('log-in', LogIn)
export default LogIn