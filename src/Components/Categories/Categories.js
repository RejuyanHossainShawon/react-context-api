import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetails from '../CategoriesDetail/CategoryDetails';

const allProducts=[{name:'Lenevo',category:'laptop'},{name:'Asus',category:'laptop'},{name:'Dell',category:'laptop'},
                {name:'Samsung',category:'mobile'},{name:'Nokia',category:'mobile'},{name:'Apple',category:'mobile'},
                {name:'Canon',category:'camera'},{name:'Nikkon',category:'camera'},{name:'Sony',category:'camera'}
]

const Categories = () => {
 const [category] = useContext(categoryContext);
 const [product,setProduct] = useState([]);
 useEffect(() =>{
     const matchedProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
       
     setProduct(matchedProduct);
       
 },[category])

    return (
        <div>
            <h2> Select Your categories {category}</h2>
            {
                product.map(pd => <CategoryDetails product={pd}></CategoryDetails> )
            }
           
        </div>
    );
};

export default Categories;