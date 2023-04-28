import Post, { postProps } from "../../components/post/post";
import RightMenuLogged from "../../components/rightmenu-logged/rightmenu-logged";
import LeftMenuLogged from "../../components/leftmenu-logged/leftmenu-logged";
import SearchBar from "../../components/searchbar/searchbar";
import postList from "../../mocks/getPosts";
import styles from "./styles.css"
import { PostBar } from "../../components/export";

class DashboardProfile extends HTMLElement {
    showP: Post[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" })

        postList.forEach((post: any) => {
            const postCard = this.ownerDocument.createElement("app-post") as Post;
            postCard.setAttribute(postProps.userimg, post.userimg);
            postCard.setAttribute(postProps.username, post.username);
            postCard.setAttribute(postProps.usertag, post.usertag);
            postCard.setAttribute(postProps.message, post.message);
            postCard.setAttribute(postProps.image, post.image);
            postCard.setAttribute(postProps.comcount, post.comcount);
            postCard.setAttribute(postProps.retcount, post.retcount);
            postCard.setAttribute(postProps.likescount, post.likescount);

            this.showP.push(postCard);
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;

            const container = this.ownerDocument.createElement("section")
            container.setAttribute("id", "container")

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            const search = this.ownerDocument.createElement("search-bar") as SearchBar

            const right = this.ownerDocument.createElement("right-menu-logged") as RightMenuLogged

            const mid = this.ownerDocument.createElement("section")
            mid.setAttribute("id", "mid-menu")

            const banner = this.ownerDocument.createElement("user-banner")

            const left = this.ownerDocument.createElement("left-menu-logged") as LeftMenuLogged

            mid.appendChild(search)

            mid.appendChild(banner)

            this.showP.forEach((p) => {
                mid.appendChild(p);
            });

            container.appendChild(left)
            container.appendChild(mid)
            container.appendChild(right)
            this.shadowRoot.appendChild(container)
        }
    }
}

customElements.define('app-dashboard-profile', DashboardProfile)