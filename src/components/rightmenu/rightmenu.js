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
        <link rel="stylesheet" href="./index.css">
        <h1>New on twitter?</h1>
        <p class="rightMenuText">Sign up now to obtain your own customized page.</p>
        <button class="rightMenuButton">Create An Account</button>
        <p class="rightMenuText">If you already have an account, <a href="">Log In</a>.</p>
        <p class="rightMenuText">When you register, you are accepting our Terms and Services and our Privacy Policy, including the politics of Cookie Usage</p>
        `
    }
}

customElements.define('right-menu', RightMenu)
export default RightMenu