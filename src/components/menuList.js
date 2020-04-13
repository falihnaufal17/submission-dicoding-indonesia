import "./menuItem.js";

class MenuList extends HTMLElement{
    
    constructor(){
        super();
    }

    set menus(menus){
        this._menus = menus;
        this.render();
    }

    render(){
        this.innerHTML = `
        <section>
            <div class="white-block">
                <div class="row menuItem">
                </div>
            </div>
        </section>
        `;
        const menuItem = document.querySelector('.menuItem');
        this._menus.forEach(menu =>{
            const menuItemElement = document.createElement("menu-item");
            menuItemElement.menu = menu;
            menuItemElement.classList.add('col-md-4', 'col-12')

            menuItem.appendChild(menuItemElement);
        })
    }
}

customElements.define('menu-list', MenuList);