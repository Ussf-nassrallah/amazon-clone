import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({
    id,
    image,
    category,
    title,
    description,
    price,
}) {
    const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        const product = {
            id,
            image,
            category,
            title,
            description,
            price,
            hasPrime,
            rating,
        };

        // Sending The Product as an action to the redux store...
        dispatch(addToBasket(product));
    };

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-5">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400 md:text-sm">
                {category}
            </p>

            <div className="flex items-start justify-center">
                <img
                    className="object-contain w-52 h-52"
                    src={image}
                    width={200}
                    height={200}
                    alt=""
                />
            </div>

            <h4 className="my-3 md:text-lg">{title}</h4>

            <div className="flex">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
            </div>

            <p className="my-2 text-xs line-clamp-2 md:text-sm text-gray-500">
                {description}
            </p>

            <div className="mb-5 font-bold">
                <Currency quantity={price} currency="GBP" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img
                        className="w-12"
                        src="https://links.papareact.com/fdw"
                        alt=""
                    />
                    <p className="text-xs text-gray-500">
                        FREE Next-day Delivery
                    </p>
                </div>
            )}

            <button onClick={addItemToBasket} className="mt-auto button">
                Add To Cart
            </button>
        </div>
    );
}
