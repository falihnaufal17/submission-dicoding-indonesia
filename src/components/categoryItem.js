class CategoryItem extends HTMLElement{
    
    constructor(){
        super();
    }

    set category(category){
        this._category = category;
        this.render();
    }

    get value(){
        return this.querySelector('#strCategory').value;
    }

    render(){
        this.innerHTML = `
        <div class="brand-item">
            <input type="hidden" id="strCategory" value=${this._category.strCategory} />
            <label htmlFor=${this._category.strCategory}>
                <div class="brand-filter">
                    <div class="valign">
                        <div class="inner">
                            <img src=${this._category.strCategoryThumb} alt=${this._category.strCategory}/>
                        </div>
                    </div>
                </div>
            </label>
            <div class="brand-title single-linetext"><span class="obj-el">${this._category.strCategory && this._category.strCategory.toUpperCase()}</span></div>
        </div>
        `;

        this.querySelector('.brand-item').addEventListener("click", this._clickEvent)
    }
}

customElements.define('category-item', CategoryItem);