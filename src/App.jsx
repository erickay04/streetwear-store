import Header from "./components/Header"
import Home from "./pages/Home"
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css"
import Footer from "./components/Footer"
import Shop from "./pages/Shop"
import Contact from "./pages/contact";
import About from "./pages/About"
import Details from "./pages/Details";
import Create from "./pages/Create"
import Login from "./pages/Login"
import Cart from "./pages/Cart"

function App() {
  const location = useLocation();
  const hideHeaderFooter = ["/create", "/login"].includes(location.pathname)
  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetails/:id" element={<Details />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      {!hideHeaderFooter && (
        <>
        <hr />
        <Footer/>
        </>
      )}
    </div>
  );
}

export default App;