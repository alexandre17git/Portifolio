import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';

function Services() {
  return (
    <div className="services" id="Services">
        <div className="p-services">
            <span>Habilidades adquiridas</span>
            <span>ou ainda em Desenvolvimento</span>
            <spane>
                dnfirjnfijr enfgrefnern erejrfringiuern ferfniefnierie
                <br/>
                jefirhfu4rohu fruhurhu uerbhurfherf eurhreuheu
            </spane>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
        </div>
        <div className="cards">
            <div style={{left: '10.5rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                details = {'Uso do Vs Code, Logica de Programacao, Criacao de Videos'}/>
            </div>

            <div style={{top: '12rem', left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {'Linguagens, Frameworks e Canvas'}
                details = {'JavaScript, React.js, Next.js, Criacao de Videos animados etc'}/>
            </div>

            <div style={{top: '19rem', left: '15rem'}}>
                <Card
                emoji = {Humble}
                heading = {'Backend'}
                details = {'Api, Banco de dados, Node.js, Banco de Dados Relacionais'}/>
            </div>
        </div>
    </div>
  )
}

export default Services
