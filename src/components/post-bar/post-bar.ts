import styles from "./styles.css"

export default class PostBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ""

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./index.css">
                <section class="postbarCont">
                <section class="up-bar">
                <img src="/img/user.png" class="userIcon">
                <div class="inputContainer">
                    <input id="inputBar" class="inputBar" type="text" placeholder="What's cookin' good lookin'?">
                    <input id="imgBar" class="inputBar" type="text" placeholder="If you wanna post a pic... (URL only pls)">
                </div>
                </section>
                <section class="down-bar">
                <button id="postButton">Tweet</button>
                </section>
                </section>
            `;
        }
    }
}
customElements.define("post-bar", PostBar)