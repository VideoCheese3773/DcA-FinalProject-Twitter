import * as Components from "./components/index.js"
//import { Attribute } from "./components/post/post.js"
import Posts from "./components/posts.js"

class AppContainer extends HTMLElement {
    constructor () {
        super()
        this.attachShadow({ mode: "open" })
        /* this.postlist=[];
        Posts.forEach((post)=>{
            const postCard = this.ownerDocument.createElement("my-post");
            postCard.setAttribute(Attribute.userimg, post.userimg);
            postCard.setAttribute(Attribute.username, post.username);
            postCard.setAttribute(Attribute.usertag, post.usertag);
            postCard.setAttribute(Attribute.message, post.message);
            postCard.setAttribute(Attribute.image, post.image);
            this.postlist.push(postCard);
        }) */
    }

    getAttribute(){
        let feed ="";
        Posts.forEach((p) => {
            feed += `
            <div class="border"></div>
            <my-post userimg="${p.userimg}" username="${p.username}" usertag="${p.usertag}" message="${p.message}" image="${p.image}"></my-post>
            <div class="border"></div>
            `
        });
        console.log("feed", feed);
        return feed;
    }

    connectedCallback() {
        let tweets = this.getAttribute();
        this.render(tweets);
    }

    render(tweets) {
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <left-menu></left-menu>
        <div class="mid-menu">
            ${tweets}
        </div>
        <right-menu></right-menu>`
    }
    //<mid-menu></mid-menu> this used to be mid menu (the one talking about sepuku)
}

customElements.define('app-container', AppContainer)