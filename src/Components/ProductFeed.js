import React, { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductFeed() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // fetch data from fake store API
        async function getProducts() {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }

        getProducts();
    }, []);

    const generateProducts = () => {
        return products.map((product) => (
            <Product
                key={product.id}
                image={product.image}
                category={product.category}
                title={product.title}
                description={product.description}
                price={product.price}
            />
        ));
    };

    return <section>{generateProducts()}</section>;
}
