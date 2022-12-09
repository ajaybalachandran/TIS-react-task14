import React, { useState } from "react";
import "./category.css"
function Category(props) {//here
    const getInitialState = () => {
        const value = "none";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
        // console.log(e.target.value);
        // var res = data.cardData.filter(item=> item.desc===e.target.value)
        // console.log(res);
        props.onChange(e.target.value) // sending to app.js

    };
    return (
        <div>
            <select value={value} onChange={handleChange} className="rounded border border-1 border-opacity-25 p-1 text-muted">
                <option value="none">Filter</option>
                <option value="headphone">Headphone</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="smart watch">Smartwatch</option>
            </select>
            {/* <p>{`You selected ${value}`}</p> */}
        </div>
    )
}
export default Category