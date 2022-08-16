
import React from "react";
import searchApiInstance from '../Model/SearchApi';
import {Link, useLocation} from "react-router-dom";

function SearchResults(props) {

    const mapItems = (res) => {
        const name = res.name;
        return res.map((res) => 
        < div key={res.id}>
            <Link to={`/${res.id}`} state={res}>
            {res.name} ({res.abv}%)</Link>
        </div>)
    }

    console.log(props);
    if (props.length == 0) {
        return <p>No results, try again</p>
    }

    return (
        <div>
            <div>
                {mapItems(props.res)}
            </div>
        </div>);
}        

function SearchDescription(props) { 
    const location = useLocation();
    let item = location.state;  

    return (<div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
    </div>);
}

function SearchBar(props) {
    let userInput = "";
    let searchResults = [];

    const handleSubmit = async() => {
        console.log("handle submit");
        await new Promise(() => {
            searchApiInstance.searchType(userInput)
                .then((res) => {
                    props.parentCallback({res});
                });
        });
    }

    const handleInput = (e) => {
        console.log("handle input");
        console.log(e.target.value);
        if (e.key === "Enter") {
            console.log("key enter");
            handleSubmit();
        } else{
            userInput = e.target.value;}

        console.log(userInput);
    }

        return (
            <div>
                <h2>Search!</h2>
                
                <input
                    type="text"
                    placeholder="Search here"
                    onKeyUp={(e) => handleInput(e)} />
                <button 
                    type="submit"
                    onClick={() => {
                        handleSubmit(); 
                    }}
                    > Search </button>  
            </div>
        );
    }

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status: null,
            userInput: "",
            list: [],
            pages: null,
            page: 0,
            display: null
        } 
    }

    handleCallback = (childData) =>{
        let pages = [];
        let count = 0;
        while(Math.ceil(childData.res.length/10)>count){
            pages[count] = 1 + count++;
        }
        this.setState({list: childData, status: "SEARCH", pages: pages});
    }
    handlePages(page){
      
    }
    componentDidUpdate(){
        if (this.state.status == "SEARCH") {
            console.log("updated");
            this.setState({display: SearchResults(this.state.list), status: null});
        }
    }

    render() {
        return (
            <div>
                <SearchBar parentCallback = {this.handleCallback}/>
                
                {console.log(this.state.list)}
                <br/>
                {this.state.display}   
                <br/>
                {this.state.pages}               
            </div>
        );
    }
    
}

export {Search, SearchResults, SearchDescription};