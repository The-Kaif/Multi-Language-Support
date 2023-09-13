// Learn.jsx - Component for displaying learning resources
// Import necessary dependencies and components
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { learnData } from "../data/LearnData";
import { useTranslation } from "react-i18next"; // Import useTranslation hook for internationalization

function Learn() {
  const { t } = useTranslation(); // Initialize the translation function
  const listArr = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <div className="mt-3">
      <h2>{t("learn.quickStart")}</h2> {/* Display translated quick start title */}
      <p className="mt-2 fs-5">
        {t("learn.welcomeMessage")} {/* Display translated welcome message */}
      </p>
      <Card className="mt-3">
        <Card.Body>
          <h4>{t("learn.youWillLearn")}</h4>{" "}
          {/* Display translated "You will learn" section */}
          <ListGroup as="ol" numbered>
            {listArr.map((item, index) => (
              <ListGroup.Item key={index} variant="primary">
                {t(`learn.listArr.${item}`)} {/* Display translated list items */}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Map over learnData array and display learning resources */}
      {learnData.map((val, index) => (
        <div className="mt-3" key={index}>
          <h3>{t(`learnData.${val.title}.title`)}</h3> {/* Display translated resource title */}
          <p className="fs-5">{t(`learnData.${val.title}.content`)}</p> {/* Display translated resource content */}
        </div>
      ))}
    </div>
  );
}

export default Learn;
