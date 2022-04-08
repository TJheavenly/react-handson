import React from "react";
import { FaSter } from "react-icons/fa"

const Star = ({ selected = false }) => (
    <FaSter color={selected ? "red" : "gray"} />
);

export default function StarRating({ totalStars = 5 }) {
    const [selectedStars] = useState(3);
    return (
        <>
            {[...Array(totalStars)].map((_, i) => (
                <Star key={i} selected={selectedStars > i} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}