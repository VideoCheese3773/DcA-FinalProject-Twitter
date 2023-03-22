class MidMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML=`
        <h1>whatever has to be here, post components, idk, i'm kinda tired, i hope we figure out something later, I just wish I had the balls to commit sepuku</h1>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget orci ac ex aliquet pretium. Mauris sagittis metus vel metus cursus suscipit. Aenean dignissim iaculis tortor a posuere. Aenean nec nibh vitae ante rhoncus consectetur. Proin fermentum dapibus sem, sit amet placerat ante laoreet non. Vivamus fringilla sollicitudin pretium. Ut sit amet dapibus mauris, ac gravida ex. Sed felis tortor, vestibulum sit amet dapibus quis, cursus et arcu. Fusce lobortis, ex ac sollicitudin interdum, erat odio ullamcorper risus, non tempus felis dui non metus. Vivamus ac urna id metus dapibus eleifend. Donec sit amet sem iaculis dui luctus dictum. Aenean egestas nulla nunc, sit amet ullamcorper quam tincidunt id. Praesent fermentum tortor elit, sed sagittis lorem egestas eget. Sed efficitur tincidunt nunc sit amet accumsan. Morbi non aliquet nulla.</p>
        `
    }
}

customElements.define('mid-menu', MidMenu)