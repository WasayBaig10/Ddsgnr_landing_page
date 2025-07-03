// components/BusinessCard.tsx
import React from 'react';
interface CardProps {
    name: string;
    company: string;
    phone: string;
    email: string;
    location: string;
    website: string;
}

const BusinessCard: React.FC<CardProps> = ({ name, company, phone, email, location, website }) => {
    return (
        <div className=" flex flex-wrap flex-row items-center m-0 justify-center font-mono ">
            {/* first card  */}
            <div className="md:w-[40vw] sm:w-[100vw] h-[400px] flex justify-start items-center shadow-lg bg-[url(/scene.jpg)] bg-cover bg-center text-white overflow-hidden">
                <div data-aos='fade-right' className=" w-[50%] text-start mx-6 text-wrap font-bold text-3xl sm:text-5xl">
                    COMFORTABLE KNITTED SHIRT FOR MEN
                </div>
                <div data-aos='fade-right' className=" w-[50%] text-wrap font-bold text-2xl">
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                        {/* <button className='bg-blue-500 text-white px-4 py-2  rounded hover:bg-blue-600 transition-colors'>
                            Shop now
                        </button> */}
                        <button
                            className="px-4 py-2 text-sm md:text-base bg-blue-500 text-white rounded whitespace-nowrap sm:width-[100px] width-[40px] h-fit"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:w-[40vw] sm:w-[100vw] h-[400px] flex flex-row items-center shadow-lg bg-[url(/scene.jpg)] bg-cover bg-center text-white overflow-hidden">
                {/* Left: Button */}
                <div data-aos='fade-left' className="w-[50%] text-start mx-6 font-bold text-2xl">
                    <div className="flex text-wrap items-center ">
                        {/* <button className='bg-blue-500 text-white px-4 py-2  rounded hover:bg-blue-600 transition-colors'>
                            Shop now
                        </button> */}
                        <button
                            className="px-4 py-2 text-sm md:text-base bg-blue-500 text-white rounded whitespace-nowrap sm:width-[100px] width-[40px] h-fit"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
                {/* Right: Text */}
                <div data-aos='fade-left' className="w-[50%] text-end mx-6 text-wrap font-bold text-3xl sm:text-5xl">
                    COMFORTABLE KNITTED SHIRT FOR MEN
                </div>
            </div>

        </div>
    );
};

export default BusinessCard;
