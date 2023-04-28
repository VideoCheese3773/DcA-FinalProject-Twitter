import styles from "./styles.css"

class UserConfig extends HTMLElement {

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
                <img src="/img/user.png" class="menuIcon">
                <h1 class="banner">User Configuration</h1>
                <input class="input" type="text" placeholder="Username"></input>
                <input class="input" type="password" placeholder="Password"></input>
                <input class="input" type="password" placeholder="Confirm Password"></input>
                <button class="button">Sign Up</button>
                <p>If you already have an account, <a id="logInButton" class="logIn">log in.</a></p>
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

customElements.define('user-config', UserConfig)
export default UserConfig