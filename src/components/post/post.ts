import styles from "./styles.css"

export enum postProps {
    "userimg" = "userimg",
    "username" = "username",
    "usertag" = "usertag",
    "message" = "message",
    "image" = "image",
    "comcount" = "comcount",
    "retcount" = "retcount",
    "likescount" = "likescount"
}

export default class Post extends HTMLElement {
    userimg?: string;
    username?: string;
    usertag?: string;
    message?: string;
    image?: string;
    comcount?: string;
    retcount?: string;
    likescount?: string;


    static get observedAttributes() {
        const attrs: Record<postProps, null> = {
            userimg: null,
            username: null,
            usertag: null,
            message: null,
            image: null,
            comcount: null,
            retcount: null,
            likescount: null,
        }
        return Object.keys(attrs)
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: postProps,
        _: string | undefined,
        newValue: string
    ) {
        switch (propName) {

            default:
                this[propName] = newValue;
                break;
        }

        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            this.shadowRoot.innerHTML += `
                <section class="tagging">
                    <img src="${this.userimg}" class="profPic">
                    <b>${this.username}</b>
                    ${this.usertag}
                </section>
                <section class="postBody">
                    <p>${this.message}</p>
                    <img src="${this.image}" class="postPic">
                </section>
                <section class="context-bar">
                    <div class="contextB"><img src="/img/comment.png" class="contextIcon">${this.comcount}</div>
                    <div class="contextB"><img src="/img/retweet.png" class="contextIcon">${this.retcount}</div>
                    <div class="contextB"><img src="/img/heart.png" class="contextIcon">${this.likescount}</div>
                </section>
            `;
        }
    }
}

customElements.define("app-post", Post)