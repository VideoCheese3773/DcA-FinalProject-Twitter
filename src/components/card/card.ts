import styles from "./card.css"
import { loadCss } from "../../utils/styles"

export enum Attribute {
    "name" = "name",
    "gender" = "gender",
    "height" = "height",
    "mass" = "mass",
    "hair_color" = "hair_color",
    "eye_color" = "eye_color",
    "birth_year" = "birth_year"
}

class Card extends HTMLElement {
    name?: string;
    gender?: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    eye_color?: string;
    birth_year?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            name: null,
            gender: null,
            height: null,
            mass: null,
            hair_color: null,
            eye_color: null,
            birth_year: null
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
    ) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

            loadCss(this, styles)

            this.shadowRoot.innerHTML = `
            <section class="cardSection">
                <h1>Name: ${this.name}</h1>
                <p>Gender: ${this.gender}</p>
                <p>Height: ${this.height} cm</p>
                <p>Weight: ${this.mass} Kg</p>
                <p>Hair color: ${this.hair_color}</p>
                <p>Eye color: ${this.eye_color}</p>
                <p>Birth year: ${this.birth_year}</p>
            </section>
            `
        }
    }
}

customElements.define("my-card", Card);
export default Card;