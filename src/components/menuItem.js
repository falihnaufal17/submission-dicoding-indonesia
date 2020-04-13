class MenuItem extends HTMLElement{
    
    constructor(){
        super();
    }

    set menu(menu){
        this._menu = menu;
        this.render();
    }

    render(){
        this.innerHTML = `
            <img class="img-thumbnail" src=${this._menu.strMealThumb} alt=${this._menu.strMeal}/>
            <div class="title">${this._menu.strMeal}</div>
        `
    }
}

customElements.define('menu-item', MenuItem);