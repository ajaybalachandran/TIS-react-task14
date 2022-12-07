import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Category from "./Category";
import Search from './Search';
import res from "./Category"

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
        <Category onChange={getData}></Category>
      </Search>

    </>
  );
}

export default App;
