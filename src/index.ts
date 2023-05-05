import "./screens/dashboard/dashboard"
import "./screens/dashboard-logged/dashboard-logged"
import "./screens/dashboard-profile/dashboard-profile"
import "./components/export"
import { navigate } from "./store/actions"
import { addObserver, appState, dispatch } from "./store/index"
import { Screens } from "./types/store"

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this);
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        switch (appState.screen) {
            case Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dashboard);
                break;

            case Screens.LOGGED:
                const logged = this.ownerDocument.createElement('app-dashboard-logged');
                this.shadowRoot?.appendChild(logged);
                break;

            case Screens.PROFILE:
                const profile = this.ownerDocument.createElement('app-dashboard-profile');
                this.shadowRoot?.appendChild(profile);

            default:
                break;
        }
    }
}

customElements.define('app-container', AppContainer)