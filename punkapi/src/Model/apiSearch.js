

const url = "https://api.punkapi.com/v2/beers";

class apiSearch {
    constructor() {
        this.response = null;
        this.type = null
    }
    format() {
        return this.response;
        console.log(this.response);
    }
    async search(type) {
        if(type == ""){
            return null;
        }
        
        this.type = new RegExp(type, 'i');
        if (this.response === null) {
            const res = await fetch(url);
            this.response = await res.json();            
        }
        
        return this.format();
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
const apiSearchInstance = new apiSearch();
export default apiSearchInstance;
