import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import Search from './View/Search'
import searchApiInstance from './Model/SearchApi';




function App() {/* 
  useEffect(()=> {
    searchApiInstance.search("ale"); //fetch data from api
 }, []); */
  return (
    <div className="App">
      <header className="App-header">
        
          <Search/>
        
        
      </header>
    </div>
  );
}

export default App;
