import React, { useState, useEffect } from "react";
import { MdVerticalAlignTop } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-100 rounded-full shadow-lg dark:bg-purple-700 dark:text-white hover:bg-purple-600 hover:text-white transition-all ease-linear duration-300"
        >
          <MdVerticalAlignTop className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
