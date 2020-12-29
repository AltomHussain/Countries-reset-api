import React from "react";
import "./Header.css";
export default function Header() {
  function handleTheme() {
    const moon = document.querySelector(".fa-moon");
    moon.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
    });
  }
  return (
    <div>
      <h3 className="hello">helllo there </h3>
      <i class="fas fa-moon" onClick={() => handleTheme()}></i>
    </div>
  );
}
