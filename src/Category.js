import React, { useState } from "react";
function Category() {
    const getInitialState = () => {
        const value = "Orange";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div>
            <select value={value} onChange={handleChange}>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="smartwatch">Smartwatch</option>
            </select>
            <p>{`You selected ${value}`}</p>
        </div>
    )
}
export default Category