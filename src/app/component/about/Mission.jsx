import Image from 'next/image';
import React from 'react';

const Mission = () => {
    return (
        <div>
            <section className="bg-white my-5">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="mt-8">
                        <Image width={600} height={600}
                            className="w-full rounded-lg"
                            src="https://bslthemes.com/html/quickeat/assets/img/illustration-5.png"
                            alt="office content 1"
                        />
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg ">
                        <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 ">
                            Our mission is to save your time
                        </h2>
                        <p className="mb-4">
                            We are strategists, designers and developers. Innovators and
                            problem solvers. Small enough to be simple and quick, but big
                            enough to deliver the scope you want at the pace you need. Small
                            enough to be simple and quick, but big enough to deliver the scope
                            you want at the pace you need.
                        </p>
                        <p>
                            We are strategists, designers and developers. Innovators and
                            problem solvers. Small enough to be simple and quick.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;