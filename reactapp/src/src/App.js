import "./App.css";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ContactUs } from "./pages/login/contactus"
import { ShopContextProvider } from "./context/shop-context";
import Home from "./Home";
import Signup from "./pages/login/Signup";
import Login from "./pages/login/login";
import Faq from "./pages/login/faq"
import Policy from "./pages/login/privacy";
import Contact from "./pages/login/contactus";
import Payment from "./pages/shop/Payment";
import CustomerDetails from "./pages/shop/CustomerDetails";



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy" element={<Policy />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/customer" element={<CustomerDetails />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
