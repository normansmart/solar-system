
import Sun from './Sun';
import Orbit from './planets';
import './App.css';
import PlanetInfo from './planetinfo';
import React from 'react';








  // function PlanetPicker() {

  //   return (

  //   <>

  //       {Planets("Mercury", "#6D6D6D")}
  //       {Planets("Venus", "#DABA4B")}
  //       {Planets("Earth", "#5D7ED4")}
  //       {Planets("Mars", "#BD553E")}
  //       {Planets("Jupiter", "#C0A879")}
  //       {Planets("Saturn", "#B7AD79")}
  //       {Planets("Neptune", "#7EB9CC")}
  //       {Planets("Pluto", "#E7F3F6")}

  //     </>

  //   )




  // }






















 



  function App() {


    return (
      
      <div>


     

      <PlanetInfo />






        <div className='solar-system'>

          <Sun />
          {Orbit("mercury-orbit", "mercury")}
          {Orbit("venus-orbit", "venus")}
          {Orbit("earth-orbit", "earth")}
          {Orbit("mars-orbit", "mars")}
          {Orbit("jupiter-orbit", "jupiter")}
          {Orbit("saturn-orbit", "saturn")}
          {Orbit("neptune-orbit", "neptune")}
          {Orbit("uranus-orbit", "uranus")}
         


        </div>

      </div>
    );


  }

export default App;
