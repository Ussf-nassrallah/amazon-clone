import React from "react";
import Navbar from "../Layout/Navbar/Navbar";

export default function Home() {
    return (
        <>
            <div className="home">
                {/* navbar component */}
                <Navbar />
                {/* banner component */}
                <h1>Homepage</h1>
            </div>
        </>
    );
}
