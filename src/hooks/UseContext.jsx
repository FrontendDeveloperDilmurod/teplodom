import axios from "axios";
import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export const Contexts = createContext();

function UseContext({ children }) {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [like, setLike] = useState([]);

  const addToBasket = (id) => {
    const product = data.find((it) => it.id === id);
    const exsistB = basket.some((t) => t.id === id);
    if (product && !exsistB) {
      const updatedBasket = [...basket, product];
      setBasket(updatedBasket);
      toast("Sevimlilar ro'yxatiga qo'shildi!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 1000,
        position: "top-center", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else if (exsistB) {
      toast("Bu mahsulot allaqachon mavjud!", {
        theme: "colored",
        className: "bg-success my-toast_1",
        autoClose: 1000,
        position: "top-center", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  const addToLike = (id) => {
    const product = data.find((p) => p.id === id);
    const exsistL = like.some((t) => t.id === id);
    if (product && !exsistL) {
      const updatedLike = [...like, product];
      setLike(updatedLike);
      toast("Wow so easy!");
    } else if (exsistL) {
    }
  };

  const removeFromBasket = (id) => {
    const updatedBasket = basket.filter((p) => p.id !== id);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const removeFromLike = (id) => {
    const updatedLike = like.filter((p) => p.id !== id);
    setLike(updatedLike);
    localStorage.setItem("like", JSON.stringify(updatedLike));
  };

  useEffect(() => {
    axios.get("https://0c7d0caa3768a5b0.mokky.dev/Teplodom").then((res) => {
      setData(res.data);
    });

    // Sahifa yuklanganda `localStorage`dan ma'lumotlarni yuklaymiz
    const storedBasket = JSON.parse(localStorage.getItem("basket"));
    if (storedBasket) setBasket(storedBasket);

    const storedLike = JSON.parse(localStorage.getItem("like"));
    if (storedLike) setLike(storedLike);
  }, []);

  return (
    <Contexts.Provider
      value={{
        data,
        setData,
        basket,
        setBasket,
        like,
        setLike,
        addToBasket,
        addToLike,
        removeFromBasket,
        removeFromLike,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}

export const usePro = () => {
  return useContext(Contexts);
};

export default UseContext;
