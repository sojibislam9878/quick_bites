import Image from 'next/image';
import React from 'react';

const BlogCard = ({ blog }) => {
    const { title, description, image } = blog;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                    src="https://demo.hasthemes.com/aahar-preview/aahar/images/blog/md-blog/4.jpg"
                    alt="News Article 1" width={300} height={200}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {title.substring(0, 20)}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {description.substring(0, 100)}
                    </p>
                    <button className="mt-4 px-4 py-2  bg-[#ed261b] text-white rounded-lg hover:bg-[#555346] transition-all duration-300">
                        Read More
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BlogCard;