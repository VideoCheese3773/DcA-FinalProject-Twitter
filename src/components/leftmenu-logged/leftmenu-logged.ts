import styles from "./styles.css"

class LeftMenuLogged extends HTMLElement {
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
        <link rel="stylesheet" href="./index.css">
        <section class="leftMenuSection">
            <div class="leftMenuItem" id="homeButton">
                <img src="../img/twitterLogo.png" class="menuIcon">
                <h1 class="leftMenuText selectedItem">Home</h1>
            </div>
            <div class="leftMenuItem">
                <img src="../img/hashtag.png" class="menuIcon">
                <h1 class="leftMenuText">Explore</h1>
            </div>
            <div class="leftMenuItem" id="configMenuButton">
                <img src="../img/cog.png" class="menuIcon">
                <h1 class="leftMenuText">Configuration</h1>
            </div>
            <div class="leftMenuItem" id="profileButton">
                <img src="../img/userIcon.png" class="menuIcon">
                <h1 class="leftMenuText">Profile</h1>
            </div>
            <div class="leftMenuItem lower">
                <img src="../img/user.png" class="userIcon">
                <div class="userInfo">
                    <p id="username" class="leftMenuText">Username</p>
                    <p id="usertag" class="leftMenuText">@Username</p>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('left-menu-logged', LeftMenuLogged)
export default LeftMenuLogged