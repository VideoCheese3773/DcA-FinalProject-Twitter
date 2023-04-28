import "./screens/dashboard/dashboard"
import "./screens/dashboard-logged/dashboard-logged"
import "./screens/dashboard-profile/dashboard-profile"
import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const dashboard = this.ownerDocument.createElement('app-dashboard-profile');
        this.shadowRoot?.appendChild(dashboard);
    }
}

customElements.define('app-container', AppContainer)