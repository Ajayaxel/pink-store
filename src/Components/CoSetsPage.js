import React from 'react';

const CoSetsPage = () => {
    const data = [
        {
            image: "images/Rectangle 20 (1).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },
        {
            image: "images/Rectangle 21 (1).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },
        {
            image: "images/Rectangle 22 (1).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },
        {
            image: "images/Rectangle 20 (1).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },
        {
            image: "images/Rectangle 20 (2).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },
        {
            image: "images/Rectangle 21 (2).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },
        {
            image: "images/Rectangle 22 (2).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },
        {
            image: "images/Rectangle 22 (4).png",
            title: "Product Name",
            price: "Rs. 700",
            oldPrice: "Rs. 1000",
            brand: "Brand Name",
            rating: 4.4,
            off: 30,
        },


    ];

    return (
        <div className='px-4 py-6 md:px-10 lg:px-16'>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='text-2xl font-bold'>Co-ord Sets</h2>
                <div className='flex gap-4'>
                    <span className='text-gray-600 cursor-pointer'>Filters</span>
                    <span className='text-gray-600 cursor-pointer'>Sort By ▼</span>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {data.map((item, index) => (
                    <div key={index} className=' shadow-md  bg-white w-full max-w-[410px] h-[423px] flex flex-col'>
                        <img src={item.image} alt={item.title} className='w-full h-[310px] rounded-[8px] object-cover' />
                        <div className='p-3 flex-1 flex flex-col justify-between'>
                            <h3 className='font-semibold'>{item.title}</h3>
                            <p className='text-sm text-gray-500'>{item.brand} <span className='ml-6'>⭐ {item.rating}</span></p>
                            <div className='flex items-center gap-2 mt-1'>
                                <span className='text-lg font-bold'>{item.price}</span>
                                <span className='text-gray-400 line-through'>{item.oldPrice}</span>
                                <span className='text-green-600 text-sm'>({item.off}% off)</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoSetsPage;