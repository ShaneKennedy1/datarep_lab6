import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the components
import Content from './Components/contents';
import Header from './Components/header';
import Footer from './Components/footer';
import NavigationBar from './Components/navigationbar';
import Read from './Components/read';
import Create from './Components/create';


function App() {
  return (
    // Use Components to create the pages
    // Use the Router component to enable navigation between different pages
    <Router>
      <div>
        {/* Include the navigation bar at the top of the page */}
        <NavigationBar />

        {/* Define the different routes for the application using Routes */}
        <Routes>
          {/* Render the Content component */}
          <Route path="/home" element={<Content />} />

          {/* Render the Read component. This will display movies */}
          <Route path="/read" element={<Read />} />

          {/* Render the Create component*/}
          <Route path="/create" element={<Create/>} />
        </Routes>

        {/* Display the footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
