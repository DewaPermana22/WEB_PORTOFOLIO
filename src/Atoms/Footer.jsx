import React from 'react'
import { FaCode } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="flex flex-col  p-5 bg-slate-100 dark:bg-gray-900 transition-colors duration-300 ease-in-out border-t border-gray-300 shadow-lg dark:border-purple-700">
        <div className="text-xl md:text-3xl font-bold transition-colors duration-300 ease-in-out flex items-center">
                <span className="mr-2 mb-2 md:text-4xl  text-purple-600"><FaCode /></span>
                <h1 className="font-Baloo text-gray-900 dark:text-gray-100">Shadewa<span className="text-purple-600">.</span>dev</h1>
            </div>
            <p className='text-gray-500 text-center dark:text-gray-100 font-Inter max-sm:text-[12px] pt-4'>Copyright © 2024 Dewa Permana</p>
    </footer>
  )
}

export default Footer