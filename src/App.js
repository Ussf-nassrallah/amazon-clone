import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/checkout" element={<Checkout />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
