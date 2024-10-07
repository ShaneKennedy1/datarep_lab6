import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import the components
import Content from './Components/contents';
import Header from './Components/header';
import Footer from './Components/footer';
import NavigationBar from './Components/navigationbar';
import Read from './Components/read';


function App() {
  return (
    //Use Components to create the pages
    <Router>
    <div>
      <NavigationBar/>
      <Routes>
      <Route path="/home" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Footer />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
