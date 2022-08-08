
import React from "react";

const url = "https://api.punkapi.com/v2/beers";

class SearchApi extends React.Component{
    constructor() {
        super();
        this.dataIsLoaded = false;
        this.response = [];
        this.searchResult = [];
        this.type = null
    }
    async fetchData() {
        console.log("fetch");
        let resp = await fetch(url);
        this.response = await resp.json();
        console.log(this.response);
    }
    cherryPick(type) {
        console.log("cherry pick " + type);
        type = new RegExp(type);
        let elem = null;
        let count = 0;
        this.searchResult = [];
        for (let index = 0; index < this.response.length; index++) {
            
            elem = this.response[index];
            if (elem.description.match(type)!= null){
                this.searchResult[count] = {"id": elem.id, "name": elem.name, "description": elem.description, "abv": elem.abv};
                count++;
            } 
            
        }
        console.log(this.searchResult);
    }

    async searchType(type) {
        console.log("search");

        if (this.response.length === 0) {
            console.log("response empty");
            this.fetchData()
                .then(() => {
                    console.log(this.response);;
                })
                .then(() => {
                    this.cherryPick(type);
                })
                .then(() => {
                    return this.searchResult;
                });
        }
        
        this.cherryPick(type)

        return this.searchResult;
    }
}
const searchApiInstance = new SearchApi();
export default searchApiInstance;
