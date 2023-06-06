import styles from "./styles.css"

export enum bannerProps {
    "userimg" = "userimg",
    "username" = "username",
    "usertag" = "usertag",
    "userdesc"="userdesc",

}

export default class uBanner extends HTMLElement {
    userimg: string="../img/user.png";
    username: string="username";
    usertag: string="@usertag";
    userdesc: string="hello, ur computer has virus"


    static get observedAttributes() {
        const attrs: Record<bannerProps, null> = {
            userimg: null,
            username: null,
            usertag: null,
            userdesc: null,
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
        propName: bannerProps,
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

            const container = this.ownerDocument.createElement("section")
            container.setAttribute("id", "bannerCont")

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            const userIco=this.ownerDocument.createElement("img")
            userIco.setAttribute("id","profPic")
            userIco.setAttribute("src",this.userimg)

            const bannnerContext=this.ownerDocument.createElement("section")
            bannnerContext.setAttribute("id","contBox")

            const button=this.ownerDocument.createElement("button")
            button.setAttribute("id","contButton")
            button.innerText="Follow"
            button.addEventListener("click",()=>console.log("no no, don't touch me there"))


            //this.shadowRoot.appendChild(userIco)
            container.appendChild(userIco)
            container.innerHTML += `
                <h2>${this.username}</h2>
                <h3>${this.usertag}</h3>
                <p>${this.userdesc}</p>
            `;
            bannnerContext.appendChild(button)
            container.appendChild(bannnerContext)



            this.shadowRoot.appendChild(container)


        }
    }
}

customElements.define("user-banner", uBanner)