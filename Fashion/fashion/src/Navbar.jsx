import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Stil dosyası

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Aşağı kaydırılırken navbar'ı gizle
        setShowNavbar(true);
      } else {
        // Yukarı kaydırılırken navbar'ı göster
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <h1 className="navbarh1">Fashion</h1>
      <input className="navbarinput" placeholder="   Search something.."></input>
      <button className="navbarbutton">Search</button>
      <h2 className="navbarh2">About</h2>
      <h2 className="navbarh2">Login</h2>

    </div>
  );
};

export default Navbar;
