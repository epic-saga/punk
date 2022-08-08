
import React from "react";
import searchApiInstance from '../Model/SearchApi';
//import {Link}, {Redirect} from "react-router-dom";

function SearchResults (props) {
    console.log("search results " + props.data.list);
    let index = 0;
    let list = props.data.list;
    if (list[index] == null) {
        console.log("list[index] = null");
        return <p>no results</p>
    }
/*     for (let i = 0; i < list.length; i++) {
        list[i].name
    }; */
    return <p>{list[index].name}</p>
}

function SearchDescription(props) {
    console.log(props.data);
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

    handleSubmit () {
        console.log('handlesubmit method is called')
        searchApiInstance.searchType(this.state.userInput)
            .then((resp) => { this.setState({status : "SEARCH", list: resp}) });
    }          

    componentDidUpdate(){
        if (this.state.status === "SEARCH") {
            console.log('componentDidUpdate method is called');
            console.log(this.state.list);
            this.setState({status: "DONE", display: <SearchResults data={this.state}/>});
        }
    }

    render() {
        let display = null;
        //let nrPages = this.state.list.length/10; //how does js handle int/dec/div
        let currentPage = null;
        
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
                {currentPage}
            </div>
        );
    }
    
}

export default Search;