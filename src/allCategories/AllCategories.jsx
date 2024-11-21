import React, { useContext } from "react";
import { Contexts } from "../hooks/UseContext";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

function AllCategories() {
  const { data, like, basket, setBasket, setLike } = useContext(Contexts);

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.slice(12, 30).map((item) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllCategories;
