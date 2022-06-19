import React from 'react';
import { useState} from 'react';











function PlanetInfo() {

  const [currentPlanet, setcurrentPlanet] = useState([{}])





const fethAPlanet = () => {
  fetch('https://api.le-systeme-solaire.net/rest/bodies')
    .then(response => response.json())
    .then((json) => {
     
      const planets = json.bodies.filter(
        (item) => {
        
           return item.isPlanet == true 
           
        }

       
      )
   
      setcurrentPlanet(planets)

    })

}



fethAPlanet()

console.log(currentPlanet)







  // currentPlanet.filter( 

  //   (item) => console.log(item)

  // )



  return (
    <div>


    </div>
  )





}












// function addToReorderList(item) {
//   const foundIndex = reorderInventory.findIndex(product => product.id == item.id);
//   foundIndex == -1 ? setReorderInventory([...reorderInventory, item]) : console.log('already put in a order...');
// };






export default PlanetInfo




