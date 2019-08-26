import React from 'react';
import Titles from './components/titles';
import MainCard from './components/maincards';
import LittleCard from './components/littlecards';
import './App.css';

const bigcards = [
  {
    title: "Frontend Avanzado",
    subtitle: "Inscripciones abiertas",
    text: "Aumenta tu nivel en Frontend aprendiendo React, Redux y NextJS",
    bgColor: "#42b8ca"
  },
  {
    title: "Desarrollo frontend",
    subtitle: "Curso en progreso",
    text: "Aprendé a crear sitios web desde cero con HTML, CSS, Javascript, React y Node.",
    bgColor: "rgb(233, 96, 143)"
  }
];

const littlecards = [
  {
    icon: "https://i.ibb.co/MGpD2Z2/camara-web.png",
    title: "Reviví cada clase",
    texto: "Todas las clases son grabadas para que puedas volver a verlas tantas veces como te sea necesario"
  },
  {
    icon: "https://i.ibb.co/3fw38fY/charlar.png",
    title: "Nunca perdés una clase",
    texto: "Todas las clases se pueden tomar de forma presencial o remota"
  },
  {
    icon: "https://i.ibb.co/bbgTr02/apoyar.png",
    title: "Estás Acompañado",
    texto: "Un equipo de trabajo especializado te acompaña durante toda la cursada"
  }

]

class App extends React.Component {
  constructor(props) {
    super(props); 
  }
  render() {

    return (
      <div className="App">
        <div className="first__block">
        <Titles title="Nuestros cursos y carreras" />
       
        <div className="main__card--container">
          {bigcards.map((item, i) => {
            return(
        <MainCard title={item.title} subtitle={item.subtitle} textcontent={item.text} bgColor={item.bgColor} />
            );
          })}
         </div>
    
        </div>
        <div className="second__block">
          <div className="container">
        <Titles title="Nuestra propuesta de valor" />
        <div className="little__card--container">
        {littlecards.map((item, i) => {
            return(
        <LittleCard key={i} icon={item.icon} title={item.title} textcontent={item.texto} />
          );
        })}
    
        </div>
        </div>
        </div>
      </div>
    );
  }
};

export default App;