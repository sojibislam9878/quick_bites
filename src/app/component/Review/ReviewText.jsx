// "use client"
// import { Rating } from "@smastrom/react-rating";
// import Image from "next/image";
// import '@smastrom/react-rating/style.css';


// const ReviewText = ({ name, designation, description, image, rating }) => {
//     return (
//         <div className="my-4">
//             <div className="card bg-base-100 shadow-xl flex flex-col w-84 h-80">  {/* Fixed width and height */}
//                 <figure className="px-10 pt-5  ">
//                     <Image
//                         width={50}
//                         height={50}
//                         className=" object-cover rounded-full"
//                         src={image}
//                         alt="client photo"
//                     />
//                 </figure>
//                 <div className="card-body items-center text-center h-50">
//                     <h2 className="card-title">{name}</h2>

//                     <Rating
//                         style={{ maxWidth: 80 }}
//                         value={rating}
//                         readOnly
//                     />
//                     <p className="mt-4 text-sm font-light leading-relaxed text-[#222222]">
//                         “{description}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ReviewText;

"use client"
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import '@smastrom/react-rating/style.css';

const ReviewText = ({ name, designation, description, image, rating }) => {
    return (
        <div className="my-4">
            <div className="card bg-base-100 shadow-xl flex flex-col ">
                <figure className="px-10 pt-5">
                    <div className="  overflow-hidden rounded-full ">
                        <Image
                            src={image}
                            alt="client photo"
                            width={80}
                            height={80}
                            className="object-cover object-top w-20 h-20"
                        />
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-sm text-gray-500">{designation}</p> {/* Optional designation field */}
                    <Rating
                        style={{ maxWidth: 80 }}
                        value={rating}
                        readOnly
                    />
                    <p className="mt-4 text-sm font-light leading-relaxed text-[#222222]">
                        “{description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewText;
