

const url = "https://api.punkapi.com/v2/beers";

class SearchApi {
    constructor() {
        this.response = [];
        this.type = null
    }
    async fetchData() {
        console.log("fetch");
        try {
            const res = await fetch(url);
            this.response = await res.json();
        } catch (e) {
            console.error(e.toString);
        } 
    }
    cherryPick() {
        console.log("cherry pick");
        const result = [];
        let elem = null;
        let count = 0;
        for (let index = 0; index < this.response.length; index++) {
            
            elem = this.response[index];
            //if elem.description.search(/this.type/i/), "description" : elem.description, "abv" : elem.abv
            result[count] = {"name" : elem.name};
            count++;
            
        }
        console.log(result[0]);
        return result;
    }
    search(type) {
        console.log("search");
        if(type == ""){
            return null;
        }
        
        this.type = new RegExp(type, 'i');
        
        if (this.response.length === 0) {
            console.log("response empty");
            this.fetchData()
                .then(() => {
                    return this.cherryPick();
                });
        }
        
        return this.cherryPick();
/*         if (list === null) {
            return await this.response;
        }
        return await this.format(); */
        
        
        /* 

        console.log("res");
        console.log(res.json()); */

/*         this.response = () => {
            return fetch(url)
                .then((data) => 
                    console.log(data.json())
                );
        }  */
    }
}
const searchApiInstance = new SearchApi();
export default searchApiInstance;
