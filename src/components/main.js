import './sectionFilter.js';
import './navbar.js';
import './sectionCategory.js';
import './menuList.js';

import DataSource from '../data/data-source.js';

const main = async () =>{
    
    const category = await DataSource.fetchCategory();

    const searchElement = document.querySelector('section-filter');
    const sectionListElement = document.querySelector('section-category');
    const menuListElement = document.querySelector('menu-list');

    sectionListElement.categories = category;

    //search by name
    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchMeal(searchElement.value);
            onSuccess(result);
        }catch(m){
            console.log(m)
        }
    };

    const onCategorySelected = async () => {
        try{
            const result = await DataSource.filterByName(sectionListElement.value);
            onSuccess(result);
        }catch(m){
            console.log(m)
        }
    };

    const onSuccess = results =>{
        menuListElement.menus = results;
    }

    searchElement.clickEvent = onButtonSearchClicked;
    sectionListElement.clickEvent = onCategorySelected;
}

export default main;