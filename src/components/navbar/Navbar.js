import React from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname, search, hash } = useLocation();
  console.log(pathname);
  const navbarDirList = ["Python", "ReactJs", "Docker", "Linux"];
  const navbarDir = navbarDirList.map((item) => {
    if (pathname.includes(item.toLowerCase())) {
      return <div className="navbar-brand">{item}</div>;
    } else {
      return (
        <li class="nav-item">
          <a class="nav-link" href={`/${item.toLowerCase()}`}>
            {item}
          </a>
        </li>
      );
    }
  });
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            NEETcode blogs
          </a>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">{navbarDir}</ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
