import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/products/header";
import Home from "./component/products/home";
import Products from "./component/products/product";
import Contact from "./component/products/contact";
import Footer from "./component/products/footer";
import Login from "./component/admin/login";
import CreateProduct from "./component/admin/createProducts";
import Notification from "./component/UI/Notification";
import PageLoader from "./component/UI/PageLoader";

function App() {
  const notification = useSelector((state) => state.ui.notification);
  const loader = useSelector((state) => state.ui.loading);
  // const notification = true;
  // const loader = false;
  console.log(notification, "notification in app.js");
  return (
    <div className="App">
      {notification && !loader && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {loader && <PageLoader />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pragyarosystem" element={<Home />} />
        <Route path="/pragyarosystem/home" element={<Home />} />
        <Route path="/pragyarosystem/products" element={<Products />} />
        <Route path="/pragyarosystem/contact" element={<Contact />} />

        <Route path="/admin" element={<Login />} />
        <Route path="/product/create" element={<CreateProduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
