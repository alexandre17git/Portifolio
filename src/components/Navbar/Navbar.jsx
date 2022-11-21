import React from 'react';
import Toggle from '../Toogle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll'
import Services from '../Services/Services';


const Navbar = () => {
    return (
        <div className= "n-wrapper">
        <div className= "n-left">
             < div className= "n-name">Alexandre</div>
             <Toggle/>
        </div>
         <div className="n-right">
         <div className="n-list">
              <ul style={{listStyleType: 'none'}}>
                <Link spy={true} to=''  smooth={true}>
                <li>Inicio</li>
                </Link>
                <Link to='' smooth={true}>
                <li>Servicos</li>
               </Link>
                <Link to='' smooth={true}>
                <li>Portifolio</li>
                </Link>
                <Link spy={true} to='' smooth={true}>
                <li>Contato</li>
                </Link>
              </ul>
         </div>
         <button className="button n-button">Contato</button>
        </div>
        </div>
    )
}

export default Navbar;