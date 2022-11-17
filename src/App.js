import './App.css';
import cardData from './dataBase/cardData';
import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import LoginHeader from './component/LoginHeader';
import SearchBar from './component/SearchBar';
import MainContainer from './component/MainContainer';
import Footer from './component/Footer';

function App() {

  // use state to maintain the searched array and searched term
  const [searchKey, setSearchkey] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);


  // calling filterdArr function with dependency searchKey
  useEffect(()=>{
    filterArr();
  },[searchKey])


  // filtering array accoring to searchKey and setting the value of filteredArr
  const filterArr=()=>{
    if(searchKey!=""){
    const newArr = cardData.filter((v)=>{
       return(
        v.title.toLowerCase().includes(searchKey.toLowerCase())
       )
    })
    setFilteredArr(newArr)
  }


  }
  return (
    <div className="App">
      <Navbar/> 
      <LoginHeader/>
      <SearchBar setSearchkey={setSearchkey}/>
      <MainContainer filteredArr={filteredArr} searchKey={searchKey}/>
      <Footer/>
    </div>
  );
}

export default App;
