import React, { useContext } from 'react';
import { categoryContext } from '../../App';


const Shipment = () => {
    const [category,setCategory] = useContext(categoryContext);
    
    return (
        <div>
            
            
            <h1>This is {category} </h1>
            <button onClick={() => setCategory(category+1)}>Increment</button>
        </div>
    );
};

export default Shipment;