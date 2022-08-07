
import React from "react";
import searchApiInstance from '../Model/SearchApi';
//import {Link}, {Redirect} from "react-router-dom";

function SearchResults (props) {
    console.log(props.data);
    return <p>search result</p>

}
function SearchDescription(props) {
    console.log(props.data);
}


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status : null,
            userInput : "",
            list : []
        } 
    }

    handleSubmit(){
        let res = searchApiInstance.search(this.userInput);
        this.setState({satus: "SEARCH", list : res});
    }

    render() {
        let display = null;
        switch (this.state.status) {
            case "SEARCH":
                display = <SearchResults data={this.state.list}/>;
                break;
            
            case "DESCRIPTION":
                display = <SearchDescription data={this.state.list}/>;
        
            default:
                break;            
        }
        
        return (
            <div>
                <p>Search for beer!</p>
                {display}
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={e=> this.setState({userInput: e.target.value})} />
                <button 
                    type="submit"
                    //onClick={this.handleSubmit()}
                     >Search</button>
            </div>
        );
    }
    
}

export default Search;