/* export var Attribute;
(function (Attribute) {
    Attribute["userimg"] = "userimg";
    Attribute["username"] = "username";
    Attribute["usertag"] = "usertag";
    Attribute["message"] = "message";
    Attribute["image"] = "image";
})(Attribute || (Attribute = {})); */

class Post extends HTMLElement{
    static get observedAttributes(){
        return ['userimg','username','usertag','message','image']
    }

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
        this[propName]=newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./index.css">
        <div class="tagging">
        <img src="${this.userimg}" class="profPic">
        <b>${this.username}</b>
        ${this.usertag}
        </div>
        <div class="postBody">
        <p>${this.message}</p>
        <img src="${this.image}" class="postPic">
        </div>
        `;
    }
}
customElements.define("my-post",Post)
export default Post