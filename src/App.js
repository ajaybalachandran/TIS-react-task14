import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Category from "./Category";
import Search from './Search';

function App() {
  

  const [myData, setData] = useState('none')
  const getData = (data) =>{
    // myData = data
    setData(data)
    // if(data.length>0){
    //   console.log(data);
    // }
    // console.log(myData);
    
  }
  
  

  return (
    <>
      {/* <Category onChange={getData}/> */}
      <Search a={myData}>
        <Category id="2" onChange={getData}/> 
      </Search>

    </>
  );
}

export default App;
