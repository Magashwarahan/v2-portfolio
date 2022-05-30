import React from "react";
import "./style.css";
const FooterNav = () => {
  return (
    <nav>
      <div className="footer-menue">
        <ul>
          <li>
            <a
              href="https://magashin.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              v1
            </a>
          </li>
          <li>
            <a
              href="https://magash-projects.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              My projects
            </a>
          </li>
          <li>
            <a href="#home">Back to Top</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FooterNav;
