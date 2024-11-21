import { Button, Pagination } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Contexts } from "../App";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";

function New() {
  const { data, like, basket, setBasket, setLike } = useContext(Contexts);

  // Pagination uchun zaruriy holatlar
  const [currentPage, setCurrentPage] = useState(1); // Hozirgi sahifa
  const itemsPerPage = 8; // Har bir sahifada qancha mahsulot ko'rsatiladi

  // Hozirgi sahifada ko'rsatiladigan mahsulotlar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const addToBasket = (id) => {
    const product = data.find((p) => p.id === id);
    const exsistB = basket.some((t) => t.id === id);
    if (product && !exsistB) {
      setBasket([...basket, product]);
      toast("Sevimlilarga qo'shildi!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 800,
        position: "top-center",
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
        autoClose: 800,
        position: "top-center",
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
      toast("Sevimlilarga qo'shildi!", {
        theme: "colored",
        className: "bg-success my-toast",
        autoClose: 800,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    } else if (exsistL) {
      toast("Bu mahsulot allaqachon mavjud!", {
        theme: "colored",
        className: "bg-success my-toast_1",
        autoClose: 800,
        position: "top-center",
        style: {
          fontSize: "16px",
          padding: "5px",
          borderRadius: "8px",
        },
      });
    }
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentItems.map((item) => (
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
                    style={{ fontSize: "15px" }}
                    className=" bg-[#FFB12A] hover:text-[#FFB12A] text-white border-0 w-44 sm:w-36 p-2"
                  >
                    Add to basket
                    <HiMiniShoppingCart />
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
      <Pagination
        style={{ marginTop: "50px", fontSize: "17px" }}
        align="center"
        current={currentPage}
        pageSize={itemsPerPage}
        total={data.length}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default New;
