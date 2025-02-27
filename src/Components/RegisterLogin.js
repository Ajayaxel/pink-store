import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterLogin = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden relative bg-gray-50">
            {/* Left Side Image */}
            <div className="hidden md:block md:w-1/2 lg:w-3/5 bg-black relative h-full">
                <img
                    src="/loginpageimg.png"
                    alt="Fashion"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Right Side Form */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-16 h-full">
                <div className="text-center w-full max-w-sm flex flex-col items-center">
                    <img src="/New logo her pride gold black  1.png" alt="Logo" className="h-10 w-auto" />
                    <h2 className="text-xl font-semibold mt-4">Create an Account</h2>
                    <p className="text-gray-500">Please enter your details to create an account</p>
                </div>

                {/* Input Fields */}
                <div className="mt-6 w-full max-w-sm">
                    <label className="block text-gray-600">Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border bg-gray-100 rounded mt-1 focus:outline-none" />
                </div>
                <div className="mt-4 w-full max-w-sm">
                    <label className="block text-gray-600">Email Address</label>
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border bg-gray-100 rounded mt-1 focus:outline-none" />
                </div>
                <div className="mt-4 w-full max-w-sm">
                    <label className="block text-gray-600">Phone Number</label>
                    <input type="email" placeholder="Enter your phone number" className="w-full px-4 py-2 border bg-gray-100 rounded mt-1 focus:outline-none" />
                </div>
                <div className="mt-4 w-full max-w-sm">
                    <label className="block text-gray-600">Password</label>
                    <input type="password" placeholder="Enter password" className="w-full px-4 py-2 border bg-gray-100 rounded mt-1 focus:outline-none" />
                </div>
                <div className="mt-4 w-full max-w-sm">
                    <label className="block text-gray-600">Confirm Password</label>
                    <input type="password" placeholder="Confirm password" className="w-full px-4 py-2 border bg-gray-100 rounded mt-1 focus:outline-none" />
                </div>

                {/* Create Account Button */}
                <button className="w-full max-w-sm bg-[#C29256] text-white py-2 rounded mt-6 hover:bg-[#a87742] transition-all">
                    Create an Account
                </button>

                {/* Divider */}
                <div className="flex items-center my-4 w-full max-w-sm">
                    <div className="border-t w-full"></div>
                    <span className="px-3 text-gray-500">Or</span>
                    <div className="border-t w-full"></div>
                </div>

                {/* Google Login Button */}
                <button className="w-full max-w-sm border py-2 flex items-center justify-center gap-2 rounded hover:bg-gray-100 transition-all">
                    <img src="/Google.png" alt="Google" className="w-6 h-6" />
                    Login with Google
                </button>

                {/* Sign In Link */}
                <p className="text-center mt-4">
                    Have an account? 
                    <span className="text-[#C29256] font-semibold cursor-pointer hover:underline" onClick={() => navigate("/login")}>
                        Sign in!
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterLogin;

