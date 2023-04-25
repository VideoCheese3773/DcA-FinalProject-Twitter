import "./components/export"
import styles from "./components/card/card.css"
import { loadCss } from "./utils/styles"
//import { fetchAPI } from "./services/data"
//import Card, { Attribute } from "./components/card/card"
//import Button, { AttributeButton } from "./components/Button/Button"

class AppContainer extends HTMLElement {
    cardList: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    async connectedCallback() {
        const dataAPI = await fetchAPI();

        dataAPI.forEach((data: any) => {
            const itemCard = this.ownerDocument.createElement("my-card") as Card;

            itemCard.setAttribute(Attribute.name, data.name);
            itemCard.setAttribute(Attribute.gender, data.gender);
            itemCard.setAttribute(Attribute.height, data.height);
            itemCard.setAttribute(Attribute.mass, data.mass);
            itemCard.setAttribute(Attribute.hair_color, data.hair_color);
            itemCard.setAttribute(Attribute.eye_color, data.eye_color);
            itemCard.setAttribute(Attribute.birth_year, data.birth_year);
            this.cardList.push(itemCard)

        });
        this.render(this.cardList)
    }

    render(cardList:any) {
        const mainApp = this.ownerDocument.createElement('section');
        mainApp.className = "mainApp";
        const counterButton = this.ownerDocument.createElement('app-button')
        mainApp.appendChild(counterButton);
        this.cardList.forEach((itemCard) => {
            mainApp.appendChild(itemCard)
        })
        loadCss(this, styles)
        this.shadowRoot?.appendChild(mainApp);
    }
}

customElements.define('app-container', AppContainer)