import React, { useEffect } from 'react';
import { useState} from 'react';
import Buttons from './Buttons';





function PlanetInfo() {

  const [Planets, setPlanets] = useState([{}])

  const [selectedPlanet, setSelecetdPlanet] = useState([{}])



useEffect(() => {

  fetch('https://api.le-systeme-solaire.net/rest/bodies')
    .then(response => response.json())
    .then((json) => {
     
      const planets = json.bodies.filter(
        (item) =>  item.isPlanet == true)
   
      setPlanets(planets)

    })

    .catch(error => { console.log (error)})

})







console.log(Planets)



function handleClick(planet) {

  setSelecetdPlanet(planet)
  
}










  // currentPlanet.filter( 

  //   (item) => console.log(item)

  // )



  return (
    <div>

    <Buttons planets={Planets} />



    </div>
  )





}












// function addToReorderList(item) {
//   const foundIndex = reorderInventory.findIndex(product => product.id == item.id);
//   foundIndex == -1 ? setReorderInventory([...reorderInventory, item]) : console.log('already put in a order...');
// };






export default PlanetInfo




