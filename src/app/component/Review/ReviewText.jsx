"use client"
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const ReviewText = ({ name, designation, description, image, rating }) => {
    return (
        <div className="my-4">
            <div className="card bg-base-100 shadow-xl flex flex-col w-84 h-80">  {/* Fixed width and height */}
                <figure className="px-10 pt-5  ">
                    <Image
                        width={150}
                        height={150}
                        className=" object-cover"
                        src={image}
                        alt="client photo"
                    />
                </figure>
                <div className="card-body items-center text-center h-50">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <Rating
                            style={{ maxWidth: 70 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <p className="mt-4 text-sm font-light leading-relaxed text-[#222222]">
                        “{description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewText;

