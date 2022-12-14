import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  useEffect(() => {
    // NOTE: πππ ν΄λΌμ΄μΈνΈ λ¨μμ λ€ν¬λͺ¨λ κ°μ§λ₯Ό νμ§ μμ΅λλ€.
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   document
    //     .getElementById("goormstrap-stylesheet")
    //     .setAttribute(
    //       "href",
    //       "https://statics.goorm.io/css/goormstrap.dark.min.css"
    //     );
    // }
    // const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    // mediaQueryList.addEventListener("change", (e) => {
    //   if (e.matches) {
    //     document
    //       .getElementById("goormstrap-stylesheet")
    //       .setAttribute(
    //         "href",
    //         "https://statics.goorm.io/css/goormstrap.dark.min.css"
    //       );
    //   } else {
    //     document
    //       .getElementById("goormstrap-stylesheet")
    //       .setAttribute(
    //         "href",
    //         "https://statics.goorm.io/css/goormstrap.v4.min.css"
    //       );
    //   }
    // });
  }, []);

  const handleDarkmode = () => {
    const isLight =
      document.getElementById("goormstrap-stylesheet").getAttribute("href") ===
      "https://statics.goorm.io/css/goormstrap.v4.min.css";
    if (isLight) {
      document
        .getElementById("goormstrap-stylesheet")
        .setAttribute(
          "href",
          "https://statics.goorm.io/css/goormstrap.dark.min.css"
        );
    } else {
      document
        .getElementById("goormstrap-stylesheet")
        .setAttribute(
          "href",
          "https://statics.goorm.io/css/goormstrap.v4.min.css"
        );
    }
    return false;
  };
  return (
    <div className="d-flex justify-content-between">
      <nav className="d-flex">
        <h4>Navigation</h4>
        <Link to="/">
          <button className="btn btn-link">Main</button>
        </Link>
        <Link to="/about">
          <button className="btn btn-link">About</button>
        </Link>
      </nav>

      <button class="btn btn-primary" onClick={handleDarkmode}>
        λ€ν¬λͺ¨λ ν κΈ
      </button>
    </div>
  );
}

export default Navigation;
