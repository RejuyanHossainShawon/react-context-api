import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category,setCategory] = useContext(categoryContext);
    
    
    return (
        <div>
            <h1>This is Header:{category} </h1>
            <button onClick={ () =>setCategory('laptop')}>Laptop</button>
            <button onClick={()=>setCategory('mobile')}>Mobile</button>
            <button onClick={()=>setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header;