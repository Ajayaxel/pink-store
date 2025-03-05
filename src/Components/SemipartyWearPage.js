import React from 'react'
import FotterSection from './FotterSection';

const SemipartyWearPage = () => {
    const imagelistMen = [
        "images/Rectangle 20 (1).png",
        "images/Rectangle 20.png",
        "images/Rectangle 21.png",
        "images/Rectangle 22 (1).png",
        "images/Rectangle 22 (2).png",
        "images/Rectangle 22.png",
        "images/Rectangle 21 (1).png",
        "images/Rectangle 22 (2).png",
    ];
    const imagelistwomen = [
        "images/Rectangle 20 (2).png",
        "images/Rectangle 21 (2).png",
        "images/Rectangle 22 (3).png",
        "images/Rectangle 22 (4).png",
    ];
    return (
        <div>
            <div className='px-[50px] py-[30px] '>
                <h2 className='text-2xl font-bold pb-4 text-center'>Semi-Party Wears</h2>

               

                <h1 className='text-2xl font-bold mt-[30px] pb-[30px]'>Categories For Men</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imagelistMen.map((img, index) => (
                        <div key={index} className="relative">
                            <img key={index} src={img} className="object-cover hover:scale-105 transition-transform duration-300 w-full h-auto" alt={`Image ${index + 1}`} />
                            <div className="text-center md:text-left">
                                <p className="text-black font-bold text-xs md:text-sm mt-3 md:mt-[15px] px-2">
                                    loremipsum
                                </p>
                                <p className="text-gray-500 font-medium text-[10px] md:text-[12px] mt-2 md:mt-[8px] px-2">
                                    Explore Now
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row pt-[40px] justify-between rounded-[12px] overflow-hidden items-center">
                    {/* Left Section with Background Image and Text */}
                    <div
                        className="w-full md:w-[50%] h-auto md:h-[650px] flex flex-col justify-center px-6 md:px-[100px] py-10 md:py-[70px] text-white rounded-t-[12px] md:rounded-l-[12px] md:rounded-t-none"
                        style={{
                            backgroundImage: "url('/images/unsplash_bBiuSdck8tU.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <h2 className="text-lg md:text-3xl font-bold text-center md:text-left">
                            WE MADE YOUR EVERYDAY<br />FASHION BETTER!
                        </h2>
                        <p className="mt-4 text-xs md:text-sm text-gray-300 text-center md:text-left">
                            In our journey to improve everyday fashion<br />
                            euphoria presents EVERYDAY wear range<br />
                            Comfortable & Affordable fashion 24/7
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button className="mt-6 px-6 h-[46px] w-[170px] py-3 bg-white text-black font-semibold rounded">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    {/* Right Section with Image */}
                    <img
                        src="/images/Rectangle 13.png"
                        alt=""
                        className="w-full md:w-[50%] h-[400px] md:h-[650px] object-cover rounded-b-[12px] md:rounded-r-[12px] md:rounded-b-none"
                    />
                </div>


                <h1 className='text-2xl font-bold pt-[70px] pb-[70px]'>Categories For Women</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imagelistwomen.map((img, index) => (
                        <div key={index} className="relative">
                            <img key={index} src={img} className="object-cover hover:scale-105 transition-transform duration-300 w-full h-auto" alt={`Image ${index + 1}`} />
                            <div className="text-center md:text-left">
                                <p className="text-black font-bold text-xs md:text-sm mt-3 md:mt-[15px] px-2">
                                    loremipsum
                                </p>
                                <p className="text-gray-500 font-medium text-[10px] md:text-[12px] mt-2 md:mt-[8px] px-2">
                                    Explore Now
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <img src="/images/Top Brands Deal.png" alt="" className='  h-max-[357px] w-full mt-[70px] mb-[70px]' />
                <h1 className='text-2xl font-bold pb-[70px]'>In The Limelight</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {imagelistwomen.map((img, index) => (
                        <div key={index} className="relative">
                            <img key={index} src={img} className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300" alt={`Image ${index + 1}`} />
                            <div className="text-center md:text-left">
                                <p className="text-black font-bold text-xs md:text-sm mt-3 md:mt-[15px] px-2">
                                    loremipsum
                                </p>
                                <p className="text-gray-500 font-medium text-[10px] md:text-[12px] mt-2 md:mt-[8px] px-2">
                                    Explore Now
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <FotterSection />
        </div>
    )
}

export default SemipartyWearPage;