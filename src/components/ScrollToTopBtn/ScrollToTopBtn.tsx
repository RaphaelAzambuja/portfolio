'use client'

import { SlArrowUp } from "react-icons/sl";
import  "./ScrollToTopBtn.scss";

export default function ScrollToTopBtn (){
  const ScrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <main className="to-top-button-main">
        <button className="to-top-btn" onClick={ScrollToTop}>
          <SlArrowUp />
        </button>
      </main>
    </>
  )
}