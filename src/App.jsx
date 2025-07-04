import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import NotAuthorized from "./pages/NotAuthorized";
import ProtectedCheckoutRoute from "./components/ProtectedCheckoutRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} />
      <div className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-authorised" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
             
             <Route
            path="/checkout"
            element={
              <ProtectedCheckoutRoute>
                <Checkout />
              </ProtectedCheckoutRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <Admin />
              </ProtectedAdminRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
