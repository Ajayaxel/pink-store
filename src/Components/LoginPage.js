import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden relative">
            
            {/* Close Button */}
            <button 
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                onClick={() => navigate(-1)} // Go back to the previous page
            >
                &times;
            </button>

            {/* Left Side - Image */}
            <div className="md:w-[50%] lg:w-[60%] bg-black hidden md:block relative h-full overflow-hidden">
                <img
                    src="/loginpageimg.png"
                    alt="Fashion"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-[50%] lg:w-[40%] flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-16 h-full">
          
                <div className="text-center w-full max-w-md flex flex-col items-center">
                    <img
                        src="/New logo her pride gold black  1.png"
                        alt="Logo"
                        className="h-[50px] w-auto"
                    />
                    <h2 className="text-2xl font-semibold mt-[40px] mb-4">Welcome Back</h2>
                    <p className="text-gray-500">
                        Please enter your credentials to access your account
                    </p>
                </div>

                {/* Input Fields */}
                <div className="mt-6 w-full max-w-md">
                    <label className="block text-gray-600">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border bg-gray-100 rounded mt-1 focus:outline-none hover:border-[#C29256] hover:shadow-lg transition-all"
                    />
                </div>

                <div className="mt-4 w-full max-w-md">
                    <label className="block text-gray-600">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border bg-gray-100 rounded mt-1 focus:outline-none hover:border-[#C29256] hover:shadow-lg transition-all"
                    />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center mt-4 w-full max-w-md">
                    <div>
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-600">
                            Remember me
                        </label>
                    </div>
                    <a href="#" className="text-[#2563EB] text-sm">
                        Forgot password?
                    </a>
                </div>

                {/* Login Button */}
                <button
                    className="w-full max-w-md bg-[#C29256] text-white py-2 rounded mt-6 hover:bg-[#C5892F] transition-all"
                    onClick={handleLogin}
                >
                    Login
                </button>

                {/* Divider */}
                <div className="flex items-center my-4 w-full max-w-md">
                    <div className="border-t w-full"></div>
                    <span className="px-3 text-gray-500">Or</span>
                    <div className="border-t w-full"></div>
                </div>

                {/* Google Login Button */}
                <button className="w-full max-w-md border py-2 flex items-center justify-center gap-2 rounded hover:bg-gray-100 transition-all">
                    <img src="/Google.png" alt="Google" className="w-6 h-6" />
                    Login with Google
                </button>

                {/* Signup Link */}
                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-[#C5892F] font-semibold">
                        Create an Account
                    </Link>
                </p>
            </div>

            {/* Pop-up Message */}
            {showPopup && (
                <div className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm flex items-center gap-3 shadow-lg w-72">
                    <span className="text-yellow-400 text-lg">⚠️</span>
                    <div>
                        <strong>Action Required</strong>
                        <p className="text-gray-300 text-xs">Incomplete fields. Please fill in all required information now.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LoginPage;









