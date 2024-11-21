import React, { useContext } from "react";
import { Button, Card, Col, Row } from "antd";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { Contexts } from "../App";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Cards2() {
  const { data, like, basket, setBasket, setLike } = useContext(Contexts);

  const addToBasket = (id) => {
    const product = data.find((p) => p.id === id);
    const exsistB = basket.some((t) => t.id === id);
    if (product && !exsistB) {
      setBasket([...basket, product]);
      toast("Added to favorite list!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 800,
        position: "top-center", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else if (exsistB) {
      toast("This product is already exisit!", {
        theme: "colored",
        className: "bg-success my-toast_1",
        autoClose: 800,
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
      setLike([...like, product]);
      toast("Added to favorite list!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 800,
        position: "top-center", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else if (exsistL) {
      toast("This product is already exisit!", {
        theme: "colored",
        className: "bg-success my-toast_1",
        autoClose: 800,
        position: "top-center", // bg-success Bootstrap'dan va my-toast o'z klassingiz
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-between align-middle mb-14 p-8">
        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>
          Популярные товары
        </h1>
        <Link to={"/allCategories"}>Смотреть все</Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(13, 25).map((item) => (
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "30px",
              height: "100%",
              marginBottom: "50px",
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
              }}
            >
              <Link to={`/productList/${item.id}`}>
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "100px",
                    height: "250px",
                    objectFit: "contain",
                  }}
                  className="mx-auto"
                />
              </Link>
            </div>
            <div style={{ textAlign: "start" }}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                {item.desc}
              </p>
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {item.price} $
              </p>
              <div className="flex justify-between align-baseline gap-1 mt-5">
                <Button
                  onClick={() => addToBasket(item.id)}
                  style={{
                    fontSize: "17px",
                  }}
                  className=" bg-[#FFB12A] hover:text-[#FFB12A] text-white border-0 w-44 sm:w-36 p-2"
                >
                  В корзину <HiMiniShoppingCart />
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

export default Cards2;
