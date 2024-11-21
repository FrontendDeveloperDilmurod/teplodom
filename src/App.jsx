import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Header from "./header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./selectedProducts/ProductList";
import Cards from "./cards/Cards";
import Basket from "./selectedProducts/Basket";
import Like from "./selectedProducts/Like";
import Footer from "./footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveNav from "./nav/Nav";
import ForCurer from "./components/ForCurer";
import ReturnPro from "./components/ReturnPro";
import Contact from "./components/Contact";
import Discount from "./components/Discount";
import Buying from "./selectedProducts/Buying";
import AllCategories from "./allCategories/AllCategories";
import New from "./components/New";

export const Contexts = createContext();

function App() {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [like, setLike] = useState([]);
  const [protect, setProtect] = useState(false);

  useEffect(() => {
    axios.get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <ChakraProvider>
      <Contexts.Provider
        value={{
          data,
          setData,
          basket,
          setBasket,
          like,
          setLike,
          protect,
          setProtect,
        }}
      >
        {/* lkdljfnsdflj */}
        <div style={{ background: "#e9e8e840" }}>
          <Router>
            <Header />
            <ResponsiveNav />
            <Routes>
              <Route path="/" element={<Cards />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/like" element={<Like />} />
              <Route path="/productList/:id" element={<ProductList />} />
              <Route path="/buying/:id" element={<Buying />} />
              {/* ///////////////////////////////////////// */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/forCurer" element={<ForCurer />} />
              {/* <Route element={<ProtectedRoute />}> */}
              <Route path="/discount" element={<Discount />} />
              {/* </Route> */}
              <Route path="/new" element={<New />} />
              <Route path="/returnPro" element={<ReturnPro />} />
              <Route path="/allCategories" element={<AllCategories />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </Contexts.Provider>
    </ChakraProvider>
  );
}
export default App;
