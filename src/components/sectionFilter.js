class SectionFilter extends HTMLElement{
    
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector('#searchText').value;
    }

    render(){
        this.innerHTML = `
        <div class="white-block">
            <div class="input-group">
                <input type="text" class="form-control" id="searchText" placeholder="Mau Nge Meal apa?..."/>
                <div class="input-group-append">
                    <div class="btn btn-white" id="searchBtn">Cari</div>
                </div>
            </div>
        </div>
        `;
        this.querySelector('#searchBtn').addEventListener("click", this._clickEvent)
    }
}

customElements.define("section-filter", SectionFilter);