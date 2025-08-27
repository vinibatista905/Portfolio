// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./scroll-to-top.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <IoIosArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTop;
