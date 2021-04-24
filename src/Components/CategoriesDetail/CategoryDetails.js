import React from 'react';


const CategoryDetails = (props) => {
     const {name}=props.product;
    
    return (
        <div>
            <h2>This is category details </h2>
            <h4>Your selected product {name}</h4>
            

        </div>
    );
};

export default CategoryDetails;