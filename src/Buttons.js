

import React from 'react';
import Planetbutton from './planetbutton';


function Buttons({planets}){

const buttonList = planets.map( 
    (item) => {
        return <Planetbutton key={item.id}  planet={item} />
    }
)


return(

<div className='planetpicker-container'>  {buttonList} </div>

)


}

export default Buttons