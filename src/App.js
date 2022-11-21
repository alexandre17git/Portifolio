import Navbar from "./components/Navbar/Navbar";
import './App.css';
import './components/Navbar/Navbar.css';
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import Portifolio from "./components/Portifolio/Portifolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {themeContext} from './Context';
import {useContext} from 'react'

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background : darkMode? 'black' : ''}}>
     <Navbar/>
     <Intro/>
     <Services/>
     <Portifolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
