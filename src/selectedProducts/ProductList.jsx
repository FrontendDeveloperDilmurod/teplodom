import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import {
  FaCalendarAlt,
  FaMinus,
  FaPlus,
  FaRegHeart,
  FaWallet,
} from "react-icons/fa";
import { Contexts } from "../App";
import { toast } from "react-toastify";
import "../selectedProducts/selected.css";
import { Button } from "antd";
import Modal_2 from "../modal/Modal_2";
import Modal_3 from "../modal/Modal_3";

const ProductList = () => {
  const [data_1, setData_1] = useState({});
  const { data, setData } = useContext(Contexts);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen_3, setIsModalOpen_3] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModal_3 = () => {
    setIsModalOpen_3(true);
  };
  const { like, basket, setBasket, setLike } = useContext(Contexts);

  const counter = () => {
    setCount((prev) => prev + 1);
  };

  const enCounter = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const addToBasket = () => {
    const exsistB = basket.some((t) => t.id === data_1.id);
    if (!exsistB) {
      setBasket([...basket, data_1]);
      toast("Added to basket!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else {
      toast("This product is already in the basket!", {
        theme: "colored",
        className: "bg-danger my-toast_1",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  const addToLike = () => {
    const exsistL = like.some((t) => t.id === data_1.id);
    if (!exsistL) {
      setLike([...like, data_1]);
      toast("Added to favorite list!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else {
      toast("This product is already in your favorites!", {
        theme: "colored",
        className: "bg-danger my-toast_1",
        autoClose: 1000,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  useEffect(() => {
    axios
      .get(`https://0c7d0caa3768a5b0.mokky.dev/Teplodom/${id}`)
      .then((res) => {
        setData_1(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "10px",
            width: "1200px",
            height: "auto",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "20px",
          }}
          key={data_1.id}
          className="shadow-lg hover:shadow-xl"
        >
          <div style={{ flex: "0 0 50%" }}>
            <img
              src={data_1.img}
              alt={data_1.title}
              style={{
                objectFit: "contain",
                width: "70%",
                height: "auto",
              }}
            />
          </div>
          <div style={{ textAlign: "start", flex: "1", marginLeft: "20px" }}>
            <p
              style={{
                fontSize: "35px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              {data_1.title}
            </p>
            <p>{data_1.desc}</p>
            <p
              style={{
                fontSize: "30px",
                marginTop: "20px",
                color: "red",
              }}
            >
              {data_1.price} sum
            </p>
            <div className="button-container">
              <button className="action-button" onClick={showModal}>
                <FaWallet />
              </button>
              <button className="action-button" onClick={showModal_3}>
                <FaCalendarAlt />
              </button>
              <button onClick={addToBasket} className="action-button">
                <HiMiniShoppingCart />
              </button>
              <button onClick={addToLike} className="action-button">
                <FaRegHeart />
              </button>
              <div className="quantity-container">
                <button className="quantity-button" onClick={enCounter}>
                  <FaMinus />
                </button>
                <span className="quantity-display">{count}</span>
                <button className="quantity-button" onClick={counter}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between align-middle">
        <p className="text-2xl">Похожие продукты</p>
        <Link to={"/allCategories"}>
          <p className="text-2xl">Смотреть все</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.slice(0, 12).map((item) => (
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
                {item.description}
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
      <Modal_2
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
      />
      <Modal_3
        isModalOpen_3={isModalOpen_3}
        setIsModalOpen_3={setIsModalOpen_3}
      />
    </div>
  );
};

export default ProductList;
