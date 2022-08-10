
import React from "react";
import { useState, useEffect } from "react";
import searchApiInstance from '../Model/SearchApi';
//import {Link}, {Redirect} from "react-router-dom";

function SearchResults (props) {
    const mapItems = (res) => {
        return res.map((res) => < div key={res.id}>{res.name} ({res.abv}%)</div>)
    }
     console.log("search results ");
     if (props.data.length == 0) {
        return <p>No results, try again</p>
     }

     return <div>
        <h2>Results</h2>
        <div>
            {mapItems(props.data)}
        </div>
    </div>
}

function SearchDescription(props) {
    console.log("search destiption");
    return <p>description</p>
}

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: null,
            userInput: "",
            list: [],
            page: 0,
            display: null
        } 
    }

    async handleSubmit () {
        await new Promise(() => {
            searchApiInstance.searchType(this.state.userInput)
                .then((res) => {
                    this.setState({list:res, display:<SearchResults data={res}/>});
                });
        });
    }

    render() {
        return (
            <div>
                <h2>Search!</h2>
                
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={e=> this.setState({userInput: e.target.value})} />
                <button 
                    type="submit"
                    onClick={() => this.handleSubmit()}
                     >Search</button>
                
                {this.state.display}
            </div>
        );
    }
    
}

export default Search;