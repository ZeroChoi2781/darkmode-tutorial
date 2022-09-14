import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  useEffect(() => {
    // NOTE: 🙅🙅🙅 클라이언트 단에서 다크모드 감지를 하지 않습니다.
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
        다크모드 토글
      </button>
    </div>
  );
}

export default Navigation;
