
import React from "react";

const url = "https://api.punkapi.com/v2/beers";

class SearchApi extends React.Component{
    constructor() {
        super();
        this.response = [];
        this.type = null
    }
    async fetchData() {
        console.log("fetch");
        this.response = await new Promise((resolve, reject)=> {
            fetch(url)
            .then(resp =>{
                resolve(resp.json());
            }).catch(err => {
                reject(console.error(err));
            });
        })
    }
    cherryPick(type) {
        console.log("cherry pick " + type);
        type = new RegExp(type, 'i');
        let elem = null;
        let count = 0;
        let searchResult = [];
        for (let index = 0; index < this.response.length; index++) {
            
            elem = this.response[index];
            if (elem.description.search(type)!= -1){
                searchResult[count] = {"id": elem.id, "name": elem.name, "description": elem.description, "abv": elem.abv};
                count++;
            } 
            
        }
        console.log(searchResult);
        return searchResult;
    }

    async searchType(type) {
        console.log("search");
        try {
            if (this.response.length != 0) {
                return this.cherryPick(type);
            }

            if (this.response.length === 0) {
                console.log("response empty");
                let res = await new Promise((resolve, reject) =>{
                    this.fetchData()
                    .then(() => {
                        resolve (this.cherryPick(type));
                    }).catch(err =>{
                        reject(console.error(err));
                    });
                });
                return res;
            }            
        } catch (error) {
            console.error(error);
            
        }
    }
}
const searchApiInstance = new SearchApi();
export default searchApiInstance;
