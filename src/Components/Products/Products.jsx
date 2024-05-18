import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage({products}) {
    const { catName } = useParams();
    console.log(catName);
    const categories = products;
    const category = categories.find(cat => cat.cat_name.toLowerCase() === catName.toLowerCase());
    
   

    return (
        <div>
            {category && category.items.map((item, index) => (
                <li key={index}>
                    <h5 style={{color:'red'}}>{item.cat_name}</h5>
                    {item.products && item.products.map((subItem, subIndex) => (
                        <li key={subIndex}> 
                            <h6>{subItem.productName}</h6>
                        </li>
                    ))}
                </li>
            ))}
        </div>
    );
}

export default CategoryPage;
