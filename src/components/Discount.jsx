import { Button } from "antd";
import React from "react";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Contexts } from "../App";
import imgs from "./imgs/image.png";
import { toast } from "react-toastify";

function Discount() {
  const { data, like, basket, setBasket, setLike } = useContext(Contexts);

  const addToBasket = (id) => {
    const product = data.find((p) => p.id === id);
    const exsistB = basket.some((t) => t.id === id);
    if (product && !exsistB) {
      setBasket([...basket, product]);
      toast("Added to favorite list!", {
        position: "top-center", // yoki "bottom-center"
        autoClose: 800,
        theme: "colored",
        className: "bg-success my-toast", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
          hideProgressBar: true,
        },
      });
    } else if (exsistB) {
      toast("This product is already exisit!", {
        autoClose: 800,
        position: "top-center",
        theme: "colored",
        className: "bg-success my-toast_1", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
          hideProgressBar: true,
        },
      });
    }
  };

  const addToLike = (id) => {
    const product = data.find((p) => p.id === id);
    const exsistL = like.some((t) => t.id === id);
    if (product && !exsistL) {
      setLike([...like, product]);
      toast("Added to favorite list!", {
        theme: "colored",
        autoClose: 800,
        position: "top-center",
        className: "bg-success my-toast", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else if (exsistL) {
      toast("This product is already exisit!", {
        autoClose: 800,
        position: "top-center",
        theme: "colored",
        className: "bg-success my-toast_1", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  return (
    <div className="container mx-auto mt-14">
      <p className="text-3xl mb-14" style={{ fontWeight: "bold" }}>
        Товары по акции
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "50px",
              height: "550px",
              position: "relative",
            }}
            key={item.id}
            className="shadow-md"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "40px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "250px",
                borderRadius: "10px",
              }}
            >
              <img
                src={imgs}
                alt=""
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ textAlign: "start" }}>
              <p style={{ fontSize: "19px" }}>{item.title}</p>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.price} $
              </p>
              <div className="flex justify-between align-baseline gap-1 mt-5 mb-5">
                <Button
                  onClick={() => addToBasket(item.id)}
                  style={{
                    fontSize: "17px",
                  }}
                  className=" bg-[#FFB12A] hover:text-[#FFB12A] text-white border-0 w-44 sm:w-36 p-2"
                >
                  Add to cart <HiMiniShoppingCart />
                </Button>
                <Button
                  className="bg-[#FFB12A] hover:bg-white hover:text-[#FFB12A] text-white border-0 w-16 sm:w-28 p-2"
                  onClick={() => addToLike(item.id)}
                  style={{
                    fontSize: "17px",
                  }}
                >
                  <FaRegHeart />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discount;
