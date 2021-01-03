import React from "react";
import "./Header.css";
export default function Header() {
  function handleTheme() {
    const moon = document.querySelector(".btn-secondary");
    moon.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
  }
  return (
    <div className="header">
      <h3>Look up for country in the world </h3>
      <button type="button" class="btn btn-secondary" onClick={() => handleTheme()} >Double click <i class="fas fa-moon"></i></button>
     
    </div>
  );
}
