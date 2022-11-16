import './App.css';
import Navbar from './component/Navbar';
import LoginHeader from './component/LoginHeader';
import SearchBar from './component/SearchBar';
import MainContainer from './component/MainContainer';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/> 
       <LoginHeader/>
      <SearchBar/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
