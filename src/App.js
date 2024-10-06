import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import the components
import Content from './Components/contents';
import Header from './Components/header';
import Footer from './Components/footer';
import NavigationBar from './Components/navigationbar';

function App() {
  return (
    //Use Components to create the pages
    <Router>
    <div>
      <NavigationBar/>
      <Routes>
      <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Footer Component</h1>} />
        <Route path="/create" element={<h1>Header Component</h1>} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
