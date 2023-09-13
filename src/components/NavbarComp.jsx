// Navbar.jsx - Component for displaying the navigation bar
// Import necessary dependencies and components
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

// Define language options for the dropdown
const languageOptions = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  // Add more languages as needed
];

function NavbarComp() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Function to change the language and store the preference in local storage
  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    // Store the selected language preference in local storage
    localStorage.setItem("selectedLanguage", languageCode);
  };

  return (
    <div>
      <Navbar bg="transparent" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/learn">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto fw-bolder">
            <Nav.Link
              href="/learn"
              className={
                location.pathname === "/learn" ? "active-link ms-3" : "ms-3"
              }
            >
              {t("navbar.learn")} {/* Display translated "Learn" link */}
            </Nav.Link>
            <Nav.Link
              href="/blog"
              className={
                location.pathname === "/blog" ? "active-link ms-3" : "ms-3"
              }
            >
              {t("navbar.blog")} {/* Display translated "Blog" link */}
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown
              title={
                <span>
                  {t("navbar.language")} <FontAwesomeIcon icon={faLanguage} />
                </span>
              }
              id="language-dropdown"
            >
              {languageOptions.map((option) => (
                <NavDropdown.Item
                  key={option.code}
                  onClick={() => changeLanguage(option.code)}
                  active={i18n.language === option.code}
                >
                  {option.name} {/* Display language options in dropdown */}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
