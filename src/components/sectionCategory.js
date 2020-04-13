import "./categoryItem.js";

class SectionCategory extends HTMLElement{
    
    constructor(){
        super();
    }

    set categories(categories){
        this._categories = categories;
        this.render();
    }

    set clickEvent(event){
        this._event = event;
        this.render();
    }

    get value(){
        return this.querySelector('#strCategory').value;
    }

    render(){
        this.innerHTML = `
        <section class="filter-section">
            <div class="white-block">
                <div class="title">KATEGORI</div>
                <div class="row vertical-xs">
                </div>
            </div>
        </section>
        `;

        const filtersection = document.querySelector('.vertical-xs');

        this._categories.forEach(category =>{
            const categoryItemElement = document.createElement('category-item');
            categoryItemElement.category = category;
            categoryItemElement.classList.add('col-3');

            filtersection.appendChild(categoryItemElement);
            categoryItemElement.addEventListener("click", this._event)
        })
    }
}

customElements.define('section-category', SectionCategory);