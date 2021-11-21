import React from "react";

export default function Product({
    image,
    category,
    title,
    description,
    price,
}) {
    return (
        <div className="">
            <img src={image} alt="" />
        </div>
    );
}
