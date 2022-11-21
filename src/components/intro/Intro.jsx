import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import avatarZepeto from '../../img/avatarZepeto1.png';
import thunbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Vetor3 from '../../img/vetorSemFundo.png';

const Intro = () => {
    return (
        <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Ola eu sou </span>
                <span>o Alexandre</span>
                <span>Desenvolvevor Fontend e Backend 
                    com alto nivel de habilidade
                     em producao de sites com React
                </span>
            </div>

          <button className='button i-button'>Contate-me</button>
        

        <div className="i-icons">
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
         </div>
        </div>
          <div className="i-right">

             <img src={avatarZepeto} alt=""/>  {/*child one */}

            <div style={{top: '-4%', left: '65%'}} className='floating-div'>   {/*child two */}
            <FloatingDiv image={thunbup} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '20%', left: '65%'}} className='floating-div'>  {/*child three */}
            <FloatingDiv image={thunbup} txt1='Conhecimentos JavaScript' txt2='Developer'/>
            </div>
            <div style={{top: '45%', left: '65%'}}className='floating-div'>
            <FloatingDiv image={thunbup} txt1='Conhecimentos Node.js' txt2='Developer'/>
        </div>
           <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
           <div className='blur' style={{background: "rgb(144, 202, 249)",
                                         top: '17rem',
                                         width: "21rem",
                                         height: '11rem',
                                         left: '-15rem'
        }}></div>
        </div>
        </div>
    )
}

export default Intro;