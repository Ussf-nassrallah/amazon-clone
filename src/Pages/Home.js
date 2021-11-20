import React from "react";

import Navbar from "../Layout/Navbar/Navbar";
import Banner from "../Components/Banner";

export default function Home() {
    return (
        <>
            <div className="bg-gray-100">
                {/* navbar component */}
                <Navbar />

                <main className="max-w-screen-xl mx-auto">
                    {/* banner component */}
                    <Banner />
                </main>
            </div>
        </>
    );
}
