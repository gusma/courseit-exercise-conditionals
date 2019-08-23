import React from 'react';
import Titles from './components/titles';
import MainCard from './components/maincards';
import LittleCard from './components/littlecards';
import camaraweb from './images/camara-web.png';
import charlar from './images/charlar.png';
import apoyar from './images/apoyar.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const name = "NotBlue";

    return (
      <div className="App">
        <div className="first__block">
        <Titles title="Nuestros cursos y carreras" />
        {name == "AllBlue" ? (
        <div className="main__card--container">
        <MainCard title="Frontend Avanzado" subtitle="Inscripciones abiertas" textcontent="Aumenta tu nivel en Frontend aprendiendo React, Redux y NextJS" bgColor="#42b8ca" />
        <MainCard title="Desarrollo Frontend" subtitle="Curso en Desarrollo" textcontent="Aprende a crear sitios web desde cero con HTML, CSS, Javascript, React y Node" bgColor="#42b8ca" />
        </div>
        ) : (
          <div className="main__card--container">
          <MainCard title="Frontend Avanzado" subtitle="Inscripciones abiertas" textcontent="Aumenta tu nivel en Frontend aprendiendo React, Redux y NextJS" bgColor="#42b8ca" />
          <MainCard title="Desarrollo Frontend" subtitle="Curso en Desarrollo" textcontent="Aprende a crear sitios web desde cero con HTML, CSS, Javascript, React y Node" bgColor="#e9608f" />
          </div>    
        )
        }
        </div>
        <div className="second__block">
          <div className="container">
        <Titles title="Nuestra propuesta de valor" />
        <div className="little__card--container">
        <LittleCard icon={camaraweb} title="Reviví cada clase" textcontent="Todas las clases son grabadas para que puedas volver a verlas tantas veces como te sea necesario" />
        <LittleCard icon={charlar} title="Nunca perdes una clase" textcontent="Todas las clases se pueden tomar de forma presencial o remota" />
        <LittleCard icon={apoyar} title="Estas Acompañado" textcontent="Un equipo de trabajo especializado te acompaña durante toda la cursada" />
        </div>
        </div>
        </div>
      </div>
    );
  }
};

export default App;
