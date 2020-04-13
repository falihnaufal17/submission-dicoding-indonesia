class Navbar extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">NGE MEAL</a>
            </div>
        </nav>
        `;
    }
}

customElements.define("nav-bar", Navbar);