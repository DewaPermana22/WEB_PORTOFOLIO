import { MdOutlineLightMode, MdNightlightRound } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode(!darkmode);
    };

    useEffect(() => {
        if (darkmode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkmode]);
   
    return (
        <nav className="flex fixed z-50 items-center w-full h-16 bg-slate-100 dark:bg-gray-900 border-b dark:border-b-gray-800 shadow-md justify-between top-0 p-7 md:p-12 transition-all duration-300 ease-in-out">
            <div className="text-2xl md:text-3xl font-bold transition-colors duration-300 ease-in-out flex items-center">
                <span className="mr-2 mb-2 md:text-4xl  text-purple-600"><FaCode /></span>
                <h1 className="font-Baloo text-gray-900 dark:text-gray-100">Shadewa<span className="text-purple-600">.</span>dev</h1>
            </div>

            <div className="flex items-center gap-5">
              
                {darkmode ? (
                    <MdOutlineLightMode
                        className="text-xl text-gray-900 dark:text-gray-100 cursor-pointer transition-all duration-300"
                        onClick={toggleDarkMode}
                    />
                ) : (
                    <MdNightlightRound
                        className="text-xl text-gray-900 dark:text-gray-100 cursor-pointer transition-all duration-300"
                        onClick={toggleDarkMode}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
