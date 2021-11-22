import React from "react";

import Navbar from "../Layout/Navbar/Navbar";

function Checkout() {
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
                            Your Shopping Basket
                        </h1>
                    </div>
                </div>
                {/* Right */}
            </main>
        </div>
    );
}

export default Checkout;
