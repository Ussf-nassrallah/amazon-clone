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

    // const generateProducts = () => {
    //     return
    // };

    return (
        <section className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0, 4).map((product) => (
                <Product
                    key={product.id}
                    image={product.image}
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}

            <img
                src="https://links.papareact.com/dyz"
                alt=""
                className="md:col-span-full"
            />

            <div className="md:col-span-2">
                {products.slice(4, 5).map((product) => (
                    <Product
                        key={product.id}
                        image={product.image}
                        category={product.category}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))}
            </div>

            {products.slice(5, products.length).map((product) => (
                <Product
                    key={product.id}
                    image={product.image}
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </section>
    );
}
