import logo from './logo.svg';
import './App.css';

import {useState} from 'react';




function App (){


const[year, setyear] =useState()



const CalculateYear=() =>{

  let age = 2022-year;


  if(age >=18){


    alert("you can vote")
  }

  else{

    alert("you cannot vote")
  }
}



const setValue = (a) =>{

  setyear(a.target.value);
}



return(

  <div className='App'>

    <form id ='validate'></form>
<h1>VOTING APP</h1>

<input type="" placeholder='enter year' id="" onChange={(a)=>setValue(a)}></input><br></br>

<button onClick={CalculateYear}> SUBMIT</button> 


  </div>
  
)
  
 

}



export default App;
