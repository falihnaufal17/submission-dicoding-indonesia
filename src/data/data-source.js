let apiUrl = 'https://www.themealdb.com/api/json/v1/1';

class DataSource{

    static fetchCategory(){
        return fetch(`${apiUrl}/categories.php`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson.categories);
            } else {
                return Promise.reject(`something error`);
            }
        })
    }

    static searchMeal(keywords){
        return fetch(`${apiUrl}/search.php?s=${keywords}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson){
                return Promise.resolve(responseJson.meals);
            }else{
                return Priomise.reject(`something wrong!`);
            }
        })
    }

    static filterByName(category_name){
        return fetch(`${apiUrl}/filter.php?c=${category_name}`)
        .then(response =>{
            return response.json();
        })
        .then(responseJson =>{
            if(responseJson){
                return Promise.resolve(responseJson.meals);
            }else{
                return Priomise.reject(`something wrong!`);
            }
        })
    }
}

export default DataSource;