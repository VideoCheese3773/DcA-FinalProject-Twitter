import styles from "./styles.css"

class RightMenuLogged extends HTMLElement {

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
        <section class="rightMenuSection">
            <h1 class="newTwitter">Who to follow?</h1>
            <div class="rightMenuItem">
                <div class="leftUser">
                    <img src="/img/user.png" class="userIcon">
                    <div class="userInfo">
                        <p id="username" class="leftMenuText">Username</p>
                        <p id="usertag" class="leftMenuText">@Username</p>
                    </div>
                </div>
                <button class="followButton">Follow</button>
            </div>

            <div class="rightMenuItem">
                <div class="leftUser">
                    <img src="/img/user.png" class="userIcon">
                    <div class="userInfo">
                        <p id="username" class="leftMenuText">Username</p>
                        <p id="usertag" class="leftMenuText">@Username</p>
                    </div>
                </div>
                <button class="followButton">Follow</button>
            </div>

            <div class="rightMenuItem">
                <div class="leftUser">
                    <img src="/img/user.png" class="userIcon">
                    <div class="userInfo">
                        <p id="username" class="leftMenuText">Username</p>
                        <p id="usertag" class="leftMenuText">@Username</p>
                    </div>
                </div>
                <button class="followButton">Follow</button>
            </div>

            <div class="rightMenuItem">
                <div class="leftUser">
                    <img src="/img/user.png" class="userIcon">
                    <div class="userInfo">
                        <p id="username" class="leftMenuText">Username</p>
                        <p id="usertag" class="leftMenuText">@Username</p>
                    </div>
                </div>
                <button class="followButton">Follow</button>
            </div>

            <div class="rightMenuItem">
                <div class="leftUser">
                    <img src="/img/user.png" class="userIcon">
                    <div class="userInfo">
                        <p id="username" class="leftMenuText">Username</p>
                        <p id="usertag" class="leftMenuText">@Username</p>
                    </div>
                </div>
                <button class="followButton">Follow</button>
            </div>
        </section>
        `
        }
        }

customElements.define('right-menu-logged', RightMenuLogged)
export default RightMenuLogged
