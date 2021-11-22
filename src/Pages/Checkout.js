import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

import Navbar from "../Layout/Navbar/Navbar";
import CheckoutProduct from "../Components/CheckoutProduct";

function Checkout() {
    const items = useSelector(selectItems);

    return (
        <div className="bg-gray-100">
            <Navbar />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* left */}
                <div className="flex-grow m-5 shadow-sm">
                    <img
                        className="w-full h-64"
                        src="https://links.papareact.com/ikj"
                        alt=""
                    />

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0
                                ? "Your Amazon Basket is Empty."
                                : "Shopping Basket"}
                        </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                image={item.image}
                                category={item.category}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                hasPrime={item.hasPrime}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Right */}
            </main>
        </div>
    );
}

export default Checkout;
