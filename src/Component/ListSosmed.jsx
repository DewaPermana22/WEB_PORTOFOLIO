import { FaInstagram,FaFacebookF,FaGithub,FaThreads,FaLinkedin } from "react-icons/fa6";
import ButtonCv from "../Atoms/ButtonCv";

const Sosmed = () => {
return (
    <div className='flex gap-2 ms-14 max-sm:relative max-sm:-top-7 max-sm:flex-col'>
        <div className="max-sm:flex flex gap-2 max-sm:gap-3">
        <div className='flex gap-10 dark:text-white dark:hover:text-purple-700 dark:border-2 dark:border-purple-700 dark:hover:bg-gray-900  dark:boreder-2  dark:hover:border-white dark:bg-purple-600 transition-colors ease-in-out hover:border-purple-600 mt-10 mb-10 border border-gray-500 p-2 transistion-all duration-300 hover:bg-purple-600 hover:text-white rounded-xl'>
            <FaInstagram className="text-xl cursor-pointer"/>
        </div>
        <div className='flex gap-10 dark:text-white dark:hover:text-purple-700 dark:border-2 dark:border-purple-700 dark:hover:bg-gray-900  dark:boreder-2  dark:hover:border-white dark:bg-purple-600 transition-colors ease-in-out hover:border-purple-600 mt-10 mb-10 border border-gray-500 p-2 transistion-all duration-300 hover:bg-purple-600 hover:text-white rounded-xl'>
            <FaFacebookF className="text-xl cursor-pointer"/>
        </div>
        <div className='flex gap-10 dark:text-white dark:hover:text-purple-700 dark:border-2 dark:border-purple-700 dark:hover:bg-gray-900  dark:boreder-2  dark:hover:border-white dark:bg-purple-600 transition-colors ease-in-out hover:border-purple-600 mt-10 mb-10 border border-gray-500 p-2 transistion-all duration-300 hover:bg-purple-600 hover:text-white rounded-xl'>
            <FaGithub className="text-xl cursor-pointer"/>
        </div>
        <div className='flex gap-10 dark:text-white dark:hover:text-purple-700 dark:border-2 dark:border-purple-700 dark:hover:bg-gray-900  dark:boreder-2  dark:hover:border-white dark:bg-purple-600 transition-colors ease-in-out hover:border-purple-600 mt-10 mb-10 border border-gray-500 p-2 transistion-all duration-300 hover:bg-purple-600 hover:text-white rounded-xl'>
            <FaLinkedin className="text-xl cursor-pointer"/>
        </div>
        <div className='flex gap-10 dark:text-white dark:hover:text-purple-700 dark:border-2 dark:border-purple-700 dark:hover:bg-gray-900  dark:boreder-2  dark:hover:border-white dark:bg-purple-600 transition-colors ease-in-out hover:border-purple-600 mt-10 mb-10 border border-gray-500 p-2 transistion-all duration-300 hover:bg-purple-600 hover:text-white rounded-xl'>
            <FaThreads className="text-xl cursor-pointer"/>
        </div>
        </div>
        <div className="relative top-9 -left-3 max-sm:-top-7 max-sm:-left-5">
        <ButtonCv/>
        </div>
    </div>
)
}

export default Sosmed