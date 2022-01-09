import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/header";
import Home from "./component/home";
import Products from "./component/products";
import Contact from "./component/contact";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
