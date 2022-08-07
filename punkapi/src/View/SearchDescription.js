
import React from "react";
//import {Link}, {Redirect} from "react-router-dom";

class SearchDescription extends React.Component {
    constructor(){
        super();
        this.state = {
            userInput : ""
        } 
    }
    
    render() {
        return (
            <div>
                <p>Search for beer!</p>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={e=> this.setState({userInput: e.target.value})} />
            </div>
        );
    }
    
}

export default SearchDescription;