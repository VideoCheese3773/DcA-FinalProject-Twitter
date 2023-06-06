import Post, { postProps } from "../../components/post/post";
import RightMenuLogged from "../../components/rightmenu-logged/rightmenu-logged";
import LeftMenuLogged from "../../components/leftmenu-logged/leftmenu-logged";
import UserConfig from "../../components/user-config/UserConfig";
import SearchBar from "../../components/searchbar/searchbar";
import styles from "./styles.css"
import { PostBar } from "../../components/export";
import { navigate, getPosts, addNewPost } from "../../store/actions"
import { dispatch, addObserver, appState } from "../../store/index";
import { Screens } from "../../types/store";

class DashboardLogged extends HTMLElement {
    showP: Post[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this);
    }

    async connectedCallback() {
        if (appState.posts.length === 0) {
            const action = await getPosts();
            dispatch(action);
        } else {
            this.render();
        }
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;

            appState.posts.forEach((post: any) => {
                const postCard = this.ownerDocument.createElement("app-post") as Post;
                postCard.setAttribute(postProps.userimg, post.userimg);
                postCard.setAttribute(postProps.username, post.username);
                postCard.setAttribute(postProps.usertag, post.usertag);
                postCard.setAttribute(postProps.message, post.message);
                postCard.setAttribute(postProps.image, post.image);
                postCard.setAttribute(postProps.comcount, post.comcount);
                postCard.setAttribute(postProps.retcount, post.retcount);
                postCard.setAttribute(postProps.likescount, post.likescount);
                console.log("yippi")

                this.showP.push(postCard);
            })

            const container = this.ownerDocument.createElement("section")
            container.setAttribute("id", "container")

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);

            const search = this.ownerDocument.createElement("search-bar") as SearchBar

            const postbar = this.ownerDocument.createElement("post-bar") as PostBar

            const right = this.ownerDocument.createElement("right-menu-logged") as RightMenuLogged

            const mid = this.ownerDocument.createElement("section")
            mid.setAttribute("id", "mid-menu")

            const left = this.ownerDocument.createElement("left-menu-logged") as LeftMenuLogged

            mid.appendChild(search)
            mid.appendChild(postbar)

            this.showP.forEach((p) => {
                mid.appendChild(p);
            });

            const userConfig = this.ownerDocument.createElement("user-config") as UserConfig

            container.appendChild(left)
            container.appendChild(mid)
            container.appendChild(right)
            container.appendChild(userConfig)
            this.shadowRoot.appendChild(container)

            const textpost = postbar.shadowRoot?.getElementById("inputBar") as HTMLInputElement
            const imgpost = postbar.shadowRoot?.getElementById("imgBar") as HTMLInputElement
            const postapost = postbar.shadowRoot?.getElementById("postButton")
            const configButton = left.shadowRoot?.getElementById("configMenuButton")
            const configMenu = userConfig.shadowRoot?.getElementById("popUpMaster")
            const profileButton = left.shadowRoot?.getElementById("profileButton")

            const defaultImg = "https://pbs.twimg.com/media/FeOm9aUaMAIKm8H?format=jpg&name=4096x4096"

            //make a post
            postapost?.addEventListener('click',async  () => {
                let actualImg = defaultImg
                if (imgpost.value !== "") {
                    actualImg = imgpost.value
                }

                dispatch(
                    await addNewPost({
                        payload:  {
                            userimg:  "../img/user.png",
                            username:  "Username V2",
                            usertag:  "@username_1",
                            message:  textpost.value,
                            image:  actualImg,
                            comcount:  "0",
                            retcount:  "0",
                            likescount:  "0",
                            date: new Date()
                        }
                    })
                )
            })

            //show user config
            configButton?.addEventListener('click', () => {
                configMenu?.classList.remove("noShow")
            })

            //switch to profile screen
            profileButton?.addEventListener('click', () => {
                console.log("moving to profile screen")
                dispatch(navigate(Screens.PROFILE))
            })
        }
    }
}

customElements.define('app-dashboard-logged', DashboardLogged)