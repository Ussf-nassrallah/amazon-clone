import React from "react";

import Navbar from "../Layout/Navbar/Navbar";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";

export default function Home() {
    return (
        <>
            <div className="bg-gray-100">
                <Navbar />

                <main className="max-w-screen-2xl mx-auto">
                    <Banner />
                    <ProductFeed />
                </main>
            </div>
        </>
    );
}
