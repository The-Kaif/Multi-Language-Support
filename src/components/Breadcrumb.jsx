// Breadcrumb.jsx - Component for displaying breadcrumbs
// Import necessary dependencies and components
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook for internationalization

function Breadcrumb() {
  const location = useLocation();
  const [path, setPath] = useState("");
  const { t } = useTranslation(); // Initialize the translation function

  // Update the 'path' state whenever the location pathname changes
  useEffect(() => {
    setPath(location.pathname.toUpperCase());
  }, [location.pathname]);

  return (
    <div className="fw-bold" style={{ color: "#087EA4" }}>
      {/* Display the translated breadcrumb page label */}
      {t('breadcrumb.page')}{" "}

      {/* Display a chevron icon for separation */}
      <FontAwesomeIcon color="#087EA4" icon={faChevronRight} />
    </div>
  );
}

export default Breadcrumb;
