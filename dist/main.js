(()=>{var e={321:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("button");e.textContent="este es el btn",this.shadowRoot.appendChild(e)}}customElements.define("app-button",e)},504:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h1>Home</h1>\n        <h1>Explore</h1>\n        <h1>Configuration</h1>\n        "}}customElements.define("left-menu",e)},820:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h1>whatever has to be here, post components, idk, i'm kinda tired, i hope we figure out something later, I just wish I had the balls to commit sepuku</h1>\n        \n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci ac ex aliquet pretium. Mauris sagittis metus vel metus cursus suscipit. Aenean dignissim iaculis tortor a posuere. Aenean nec nibh vitae ante rhoncus consectetur. Proin fermentum dapibus sem, sit amet placerat ante laoreet non. Vivamus fringilla sollicitudin pretium. Ut sit amet dapibus mauris, ac gravida ex. Sed felis tortor, vestibulum sit amet dapibus quis, cursus et arcu. Fusce lobortis, ex ac sollicitudin interdum, erat odio ullamcorper risus, non tempus felis dui non metus. Vivamus ac urna id metus dapibus eleifend. Donec sit amet sem iaculis dui luctus dictum. Aenean egestas nulla nunc, sit amet ullamcorper quam tincidunt id. Praesent fermentum tortor elit, sed sagittis lorem egestas eget. Sed efficitur tincidunt nunc sit amet accumsan. Morbi non aliquet nulla.</p>\n        "}}customElements.define("mid-menu",e)},215:()=>{class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML="\n        <h1>New on twitter?</h1>\n        <h3>plz don't do this to yourself</h3>\n        <h1>this should be a button</h1>\n        <p>maybe it's better for us to no make these containers as components for the time being</p>\n        "}}customElements.define("right-menu",e)}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}(()=>{"use strict";n(321),n(504),n(820),n(215);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML='\n        <link rel="stylesheet" href="./index.css">\n        <left-menu></left-menu>\n        <mid-menu></mid-menu>\n        <right-menu></right-menu>\n        '}}customElements.define("app-container",e)})()})();