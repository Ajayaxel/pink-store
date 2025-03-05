import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBookmark, FiX, FiFilter, FiChevronDown } from "react-icons/fi";
import list from '../SampleData';

const PartyWearsPage = () => {
    const navigate = useNavigate();
    const [selectedColors, setSelectedColors] = useState([]);
    const [priceRange, setPriceRange] = useState([70, 600]);
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    const [openFilters, setOpenFilters] = useState({});

    const toggleFilter = (filterName) => {
        setOpenFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
    };

    const toggleColor = (color) => {
        setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
    };

    return (
        <div className="flex px-[50px] py-[50px]">
            {/* Sidebar Filters */}
            <div className={`transition-all duration-300 ${isFilterOpen ? 'w-1/7' : 'w-0 overflow-hidden'} relative`}>
                {isFilterOpen && (
                    <>
                        <FiX className="absolute right-4  cursor-pointer" onClick={() => setIsFilterOpen(false)} />
                        <h3 className="font-semibold text-lg">Filter</h3>

                        <div className="mt-4">
                            <h4 className="font-semibold">Colors</h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {["Purple", "Black", "Red", "Orange", "Navy", "White"].map(color => (
                                    <button
                                        key={color}
                                        className={`w-6 h-6 rounded-full ${selectedColors.includes(color) ? 'border-2 border-black' : ''}`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                        onClick={() => toggleColor(color)}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <h4 className="font-semibold">Price</h4>
                            <input
                                type="range"
                                min="70" max="600"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([70, parseInt(e.target.value)])}
                                className="w-full mt-2"
                            />
                            <p className="text-sm">${priceRange[0]} - ${priceRange[1]}</p>
                            <div className="mt-4">
                                <h3 className="text-lg font-medium">Categories</h3>
                                <ul className="mt-2 space-y-2">
                                    {["Clothing and Accessories", "Sarees and Saree Essentials", "Women's Sarees"].map((category) => (
                                        <li key={category} className="cursor-pointer text-gray-700 hover:underline">
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {[
                                "Price", "Brand", "Discount", "Pattern", "Fabric", "Occasion", "Color", "Customer Ratings",
                            ].map((filter) => (
                                <div key={filter} className="mt-4 border-b pb-2">
                                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFilter(filter)}>
                                        <h3 className="text-lg font-medium">{filter}</h3>
                                        <FiChevronDown className={`transition-transform ${openFilters[filter] ? "rotate-180" : ""}`} />
                                    </div>
                                    {openFilters[filter] && (
                                        <div className="mt-2 text-sm text-gray-600">
                                            Filter options here...
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </>
                )}
            </div>

            {/* Product Grid */}
            <div className={`transition-all duration-300 ${isFilterOpen ? 'w-3/4' : 'w-full'} p-6`}>
                {!isFilterOpen && (
                    <img src="/Filter.png " className="cursor-pointer h-[20px] w-[20px] text-2xl absolute top-[170px]  left-[50px]" onClick={() => setIsFilterOpen(true)} />
                )}

                <h3 className='text-3xl font-semibold text-black text-center'>PartyWears</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
                    {list.map((item) => (
                        <div key={item.image} className="cursor-pointer relative" >
                            <img src={item.image} alt={item.name} className="w-full h-auto rounded-md hover:scale-105 transition-transform" />
                            <FiBookmark className="cursor-pointer absolute top-4 right-4 text-white" />
                            <p className="mt-2 font-semibold">{item.name}</p>
                            <p className="text-gray-700">AED  {item.discountedPrice}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartyWearsPage;
