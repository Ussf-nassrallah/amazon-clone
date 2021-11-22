import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

export default function CheckoutProduct({
    id,
    image,
    category,
    title,
    description,
    price,
    hasPrime,
    rating,
}) {
    return (
        <div className="grid grid-cols-5">
            <img className="w-52 h-52 object-contain" src={image} alt={title} />

            <div className="col-span-3 mx-5">
                <p>{title}</p>

                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                </div>

                <p className="my-2 text-xs line-clamp-3 md:text-sm text-gray-500">
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
            </div>

            <div className="flex flex-col space-y-2">
                <button className="button">Add To Basket</button>
                <button className="button">Remove From Basket</button>
            </div>
        </div>
    );
}
