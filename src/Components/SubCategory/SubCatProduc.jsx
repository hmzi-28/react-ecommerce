import React from 'react';
import { useParams } from 'react-router-dom';

const SubCategoryProduct = ({products}) => {
    const { catName, subCat } = useParams();
    const allProducts = products;
    const productData = allProducts.flatMap(product => product.items.filter(item => item.cat_name.replace(/\s+/g, '-') === subCat)
    );
  
    return (
        <>
            <div>
                {productData.map((item, index) => (
                    <div>
                        {item.products.length}
                        <div key={index}>
                            {item.products.map((subItem, subIndex) => (
                                <h1 key={subIndex}>{subItem.productName}</h1>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default SubCategoryProduct;
