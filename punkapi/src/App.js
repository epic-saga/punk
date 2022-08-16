import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import { Routes, Route} from 'react-router-dom';
import {Search, SearchResults, SearchDescription} from './View/Search';
import searchApiInstance from './Model/SearchApi';




function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/results" element={<SearchResults/>}/>
          <Route path='/:id' element={<SearchDescription/>}/>
        </Routes>
        
        
      </header>
    </div>
  );
}

export default App;
