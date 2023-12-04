import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./mainPage/Layout/MainLayout";
import Home from "./mainPage/Page/Home";
import Product from "./mainPage/Page/Product";
import Cart from "./mainPage/Page/Cart";
import InforProduct from "./mainPage/Page/InforProduct";
import PageError from "./mainPage/Page/PageError";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:name/:id" element={<InforProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
