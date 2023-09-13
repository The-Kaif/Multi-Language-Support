// Import necessary dependencies and components
import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { Card } from "react-bootstrap"; // Import Bootstrap Card component

function Blog() {
  const { t } = useTranslation(); // Initialize translation function

  // Retrieve blog post data from translation resources
  const blogData = t("blog.posts", { returnObjects: true });

  return (
    <div className="mt-3">
      {/* Display the blog title */}
      <h2>{t("blog.title")}</h2>

      {/* Display blog introduction */}
      <p className="mt-2 fs-5">{t("blog.intro")}</p>

      {/* Map over the blogData array and render individual blog cards */}
      {blogData.map((entry, index) => (
        <Card className="mt-3" key={index}>
          <Card.Body>
            {/* Display blog post title */}
            <h3>{entry.title}</h3>

            {/* Display blog post time */}
            <p className="text-muted">{entry.time}</p>

            {/* Display blog post content */}
            <p className="fw-normal fs-6 text-secondary">{entry.content}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Blog;
