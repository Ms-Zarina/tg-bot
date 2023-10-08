import React from 'react';
import './ProductList.css'





const  ProductList = () => {

    const productApi = 'https://world.openfoodfacts.org/api/v0/product/737628064502.json'

    const getProduct = () =>
        fetch(productApi).then((response) => {
            response.json()
            .then((data) => {console.log(data)})
        })


    return (
        <div>
            ProductList
        </div>
    );
}

export default ProductList;