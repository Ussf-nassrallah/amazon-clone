import React from "react";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

export default function Navbar() {
    return (
        <header>
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-2 flex-grow py-2">
                {/* nav-logo */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <img
                        src="https://links.papareact.com/f90"
                        alt="amazon"
                        width={100}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>

                {/* search */}
                <div className="mx-4 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input
                        type="text"
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}
                <div className="text-white text-xs flex items-center space-x-6 md:text-sm">
                    <div className="link">
                        <p className="font-light">Hello, Youssef nasrallah</p>
                        <p className="font-bold">Account & Lists</p>
                    </div>

                    <div className="link">
                        <p className="font-light">Returns</p>
                        <p className="font-bold">&Orders</p>
                    </div>

                    <div className="relative link flex items-center">
                        <span className="absolute flex items-center justify-center top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center font-bold rounded-full text-black">
                            0
                        </span>

                        <ShoppingCartIcon className="h-10" />
                        <p className="font-bold hidden md:inline mt-2">Cart</p>
                    </div>
                </div>
            </div>
            {/* bottom nav */}
            <div className="bg-amazon_blue-light flex text-white items-center space-x-3 p-2 text-sm">
                <p className="flex items-center link">
                    <MenuIcon className="h-6 w-6 mr-2" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grecery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">
                    Health & Personal Care
                </p>
            </div>
        </header>
    );
}
