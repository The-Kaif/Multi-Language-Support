// App.jsx - Main component that sets up the application's routing and layout
// Import necessary dependencies and components
import { Container } from "react-bootstrap";
import NavbarComp from "./components/NavbarComp"; // Import the navigation bar component
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Learn from "./components/Learn"; // Import the Learn component
import Blog from "./components/Blog"; // Import the Blog component
import Breadcrumb from "./components/Breadcrumb"; // Import the Breadcrumb component

function App() {
  return (
    <div>
      <Container>
        <NavbarComp /> {/* Render the navigation bar */}
        <Breadcrumb /> {/* Render the breadcrumb component */}
        <Routes>
          <Route path="/learn" element={<Learn />} /> {/* Define route for the Learn component */}
          <Route path="/blog" element={<Blog />} /> {/* Define route for the Blog component */}
          <Route path="*" element={<Navigate to={"/learn"} />} /> {/* Default route to redirect to Learn */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
