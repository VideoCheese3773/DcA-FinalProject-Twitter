import Post, { postProps } from "../../components/post/post";
import RightMenu from "../../components/rightmenu/rightmenu";
import LeftMenu from "../../components/leftmenu/leftmenu";
import SearchBar from "../../components/searchbar/searchbar";
import SignUp from "../../components/signUp/SignUp"
import LogIn from "../../components/LogIn/logIn"
//import {postList} from "../../mocks/getPosts";
import styles from "./styles.css"
import { getPosts, navigate } from "../../store/actions"
import { appState, dispatch } from "../../store/index";
import { Screens } from "../../types/store";

class Dashboard extends HTMLElement {
    showP: Post[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" })

        /* postList.forEach((post: any) => {
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
        }) */
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

            const right = this.ownerDocument.createElement("right-menu") as RightMenu

            const mid = this.ownerDocument.createElement("section")
            mid.setAttribute("id", "mid-menu")

            const left = this.ownerDocument.createElement("left-menu") as LeftMenu

            mid.appendChild(search)

            this.showP.forEach((p) => {
                mid.appendChild(p);
            });

            const signUp = this.ownerDocument.createElement("sign-up") as SignUp
            const logIn = this.ownerDocument.createElement('log-in') as LogIn

            container.appendChild(left)
            container.appendChild(mid)
            container.appendChild(right)
            container.appendChild(signUp)
            container.appendChild(logIn)
            this.shadowRoot.appendChild(container)

            const popUpMasterSignUp = signUp.shadowRoot?.getElementById("popUpMaster")
            const popUpMasterLogIn = logIn.shadowRoot?.getElementById("popUpMaster")
            const createAccount = right.shadowRoot?.getElementById("createAccount")
            const logToAccount = right.shadowRoot?.getElementById("logInButton")
            const switchLogIn = signUp.shadowRoot?.getElementById("logInButton")
            const switchSignUp = logIn.shadowRoot?.getElementById("signUpButton")
            const signUpButton = signUp.shadowRoot?.getElementById("signUpButton")
            const logInButton = logIn.shadowRoot?.getElementById("logInButton")

            //show sign up
            createAccount?.addEventListener('click', () => {
                popUpMasterSignUp?.classList.remove("noShow")
            })

            //show log in
            logToAccount?.addEventListener('click', () => {
                popUpMasterLogIn?.classList.remove("noShow")
            })

            //switch to sign up
            switchLogIn?.addEventListener('click', () => {
                popUpMasterSignUp?.classList.add("noShow")
                popUpMasterLogIn?.classList.remove("noShow")
            })

            //switch to log in
            switchSignUp?.addEventListener('click', () => {
                popUpMasterLogIn?.classList.add("noShow")
                popUpMasterSignUp?.classList.remove("noShow")
            })

            //switch to logged screen
            signUpButton?.addEventListener('click', () => {
                console.log("moving to logged screen")
                dispatch(navigate(Screens.LOGGED))
            })
            logInButton?.addEventListener('click', () => {
                console.log("moving to logged screen")
                dispatch(navigate(Screens.LOGGED))
            })
        }
    }
}

customElements.define('app-dashboard', Dashboard)
