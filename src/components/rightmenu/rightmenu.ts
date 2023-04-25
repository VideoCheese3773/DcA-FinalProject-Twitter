import styles from "./styles.css"

class RightMenu extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback(){
        if (this.shadowRoot) {
            this.render()
        }
    }

    render(){
        this.shadowRoot!.innerHTML = ``

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);

        this.shadowRoot!.innerHTML += `
        <link rel="stylesheet" href="./index.css">
        <section class="rightMenuSection">
            <h1 class="newTwitter">New on twitter?</h1>
            <p class="rightMenuText responsiveHide">Sign up now to obtain your own customized page.</p>
            <button class="rightMenuButton">Create An Account</button>
            <p class="rightMenuText">If you already have an account, <a href="">Log In</a>.</p>
            <p class="rightMenuText responsiveHide">When you register, you are accepting our Terms and Services and our Privacy Policy, including the politics of Cookie Usage</p>
        </section>
        `
    }
}

customElements.define('right-menu', RightMenu)
export default RightMenu