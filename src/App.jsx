import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Services from "./Components/Services/Services";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import MobileNav from "./Components/MobileNav/MobileNav";

function App() {
  return (
    <div className="overall">
      <Router>
        <Header></Header>
        <MobileNav></MobileNav>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contacts></Contacts>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
