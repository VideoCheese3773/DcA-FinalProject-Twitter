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
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ipsum massa. Etiam non fermentum turpis, quis dapibus purus. Sed vitae tellus aliquet, hendrerit nunc ac, venenatis sapien. Maecenas vitae ligula lobortis, volutpat ex eget, rutrum ex. Fusce ultricies aliquet purus in dapibus. Ut in elit justo. Nulla eget dui vitae quam condimentum varius. Aenean egestas ut nulla non malesuada. Mauris eleifend tincidunt leo, eu volutpat ante malesuada nec. Donec eu euismod enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam porttitor urna vitae tellus imperdiet malesuada. Maecenas congue leo ut tempus egestas. Etiam lacinia eu orci id efficitur.

        Ut consectetur pharetra odio, id elementum nulla ultrices eget. Cras et fermentum metus, sed posuere quam. Donec sed fringilla neque, ullamcorper elementum nibh. Proin laoreet justo sapien, nec hendrerit leo ornare in. Duis velit elit, condimentum eu quam eu, tempor eleifend justo. Maecenas volutpat ultricies libero, at pellentesque risus. Vestibulum a gravida lacus, id semper erat.
        
        Vestibulum nec convallis tortor, a posuere lorem. Donec viverra purus quis fermentum posuere. Proin fermentum tellus massa, non fermentum enim iaculis non. Fusce quam eros, hendrerit eget dui vel, consequat commodo nunc. Integer vel elit urna. Morbi eu felis posuere, imperdiet velit eget, finibus arcu. Nam in leo sit amet sem consectetur vehicula in et purus. Suspendisse sit amet erat vel ipsum faucibus condimentum. Nunc mattis varius augue quis tempor. Morbi sagittis libero eget purus tristique, sed tristique sapien lobortis.
        
        Donec id interdum orci, vel euismod erat. Maecenas non erat mollis urna dignissim interdum et eget augue. Maecenas nec orci est. In gravida facilisis est vitae mattis. Quisque suscipit leo facilisis, cursus justo a, aliquam nulla. Vestibulum dapibus ligula purus, porta vestibulum nisl condimentum non. Maecenas nec lacinia sem. Cras dictum dictum ante nec fringilla. Morbi ultricies libero a placerat volutpat. Nam non arcu eleifend, posuere dui non, faucibus turpis. Pellentesque sed risus eu mi dignissim posuere convallis ut tortor. Sed sit amet risus posuere, finibus erat eu, lobortis orci. Maecenas id est sit amet felis aliquet scelerisque. Phasellus molestie porttitor tristique. Quisque diam ipsum, accumsan sed lectus eu, pretium ultricies nibh.
        
        Mauris vel mauris augue. Nullam volutpat pharetra dolor a ultrices. Fusce lacinia, metus eget eleifend varius, dui quam lacinia neque, sed accumsan massa sem et nunc. Suspendisse laoreet gravida lobortis. Etiam quis pharetra dui. Vivamus fermentum sapien non nulla convallis, vitae blandit ligula posuere. Praesent aliquet condimentum placerat. Phasellus pulvinar lacinia placerat. In luctus nulla a dui tempus, ut dapibus sapien tincidunt.
        
        Quisque vel dapibus purus. Nam pretium libero in orci dapibus, ut iaculis nulla lobortis. Maecenas tempus fringilla elit at maximus. Praesent dapibus, erat sit amet vehicula porttitor, ligula dolor posuere libero, vitae mollis turpis velit quis metus. Suspendisse potenti. Vivamus vitae congue velit. Proin mauris orci, porttitor a ligula sed, rhoncus pretium est. Ut elementum ex sed quam viverra pulvinar. Donec mattis malesuada pharetra. Integer hendrerit ligula dolor, sit amet sagittis felis eleifend nec. Nam eleifend lectus lectus, volutpat laoreet purus euismod non. In eu odio tempor, gravida lorem ut, dapibus ligula. Pellentesque pellentesque nunc metus, id dapibus ante elementum in. Sed porta et nulla quis sodales. Integer aliquam efficitur metus, sit amet porta mauris aliquam at. Aenean faucibus ipsum at pulvinar elementum.
        
        Pellentesque non purus tortor. Nam at euismod felis. Vivamus a finibus lorem, non scelerisque mauris. Nulla facilisi. In hac habitasse platea dictumst. Curabitur a finibus libero. Proin condimentum convallis blandit. Proin sollicitudin, leo vitae efficitur aliquet, orci justo pellentesque tellus, ac congue nunc elit vitae ex. Cras sed massa nisi. Nulla in leo nec elit consectetur sollicitudin. Pellentesque non pretium metus. Donec elementum blandit faucibus.
        
        Donec vestibulum euismod efficitur. Ut vel ante id orci finibus luctus quis sit amet nunc. Sed id est ut enim molestie pharetra. Aliquam dignissim luctus dui quis ultricies. Pellentesque commodo risus quis est tristique, tempor bibendum est pharetra. Donec quis lacus venenatis, euismod ex nec, finibus lacus. In hendrerit nec elit ac imperdiet. Proin pharetra est et velit tempor, eu ullamcorper velit semper. Nullam ac purus eget turpis semper aliquam non ut urna. Curabitur gravida scelerisque porttitor. Curabitur rhoncus laoreet lacus sit amet dapibus.
        
        Cras pharetra velit vel mattis consectetur. Mauris scelerisque ligula quis eros aliquet suscipit. Cras mattis non nunc id finibus. Vivamus imperdiet erat nisl, sit amet euismod ligula lacinia id. Phasellus et dui non diam porttitor volutpat. Suspendisse potenti. Maecenas malesuada ligula id pulvinar semper.
        
        Maecenas tristique diam mi, vel congue justo faucibus sit amet. In in blandit massa. Proin sit amet facilisis augue. Pellentesque varius scelerisque sodales. Nulla volutpat sapien enim. Integer eu leo nec felis rhoncus finibus eget at sem. Cras eu faucibus mauris. Cras molestie lorem at commodo venenatis. Donec laoreet sem vitae commodo vehicula. Aenean aliquet augue id est vestibulum imperdiet. Vivamus sed leo nec felis gravida dignissim. Aliquam ultrices suscipit tellus at egestas.</p>
        `
    }
}

customElements.define('mid-menu', MidMenu)