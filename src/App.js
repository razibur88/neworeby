import RootLayout from "./components/root/RootLayout";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Product from "./pages/Product";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Aboutbrand from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Myaccount from "./pages/Myaccount";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/about" element={<Aboutbrand />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/account" element={<Myaccount />}></Route>
      <Route path="/sign" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
