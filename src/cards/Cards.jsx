import React, { useContext, useEffect, useState } from "react";
import Cards1 from "./Cards1";
import Cards2 from "./Card2";
import { Contexts } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../cards/cards.css";
import img_1 from "./imgs/img1.png";
import img_2 from "./imgs/img2.png";
import img_3 from "./imgs/img3.png";
import img_4 from "./imgs/img4.png";
import img_6 from "./imgs/img6.png";
////////////////////////////////////
import img1 from "../cards/img/image1.png";
import img2 from "../cards/img/image2.png";
import img3 from "../cards/img/image3.png";
import img4 from "../cards/img/image4.png";
import img5 from "../cards/img/nav.png";
import { Link } from "react-router-dom";

const sliderList = [
  {
    id: 4,
    title: "Basalt wool",
    desc: `Базальтовое волокно представляет собой материал, изготовленный из чрезвычайно тонких волокон`,
    img: img_4,
    images: [img4],
  },
  {
    id: 1,
    title: "Штукатурка гипсовая",
    desc: "пастообразный или порошковый материал, применяемый для",
    img: img_1,
    images: [img5],
  },
  {
    id: 2,
    title: "Пеноплекс Основа",
    desc: `производитель тепло- и гидроизоляционных материалов.`,
    img: img_2,
    images: [img1],
  },
  {
    id: 3,
    title: "Гипсакартон",
    desc: `Cтроительный материал, представляющий собой лист состоящий из двух слоёв`,
    img: img_3,
    images: [img2],
  },
  {
    id: 5,
    title: "Финская Фанера",
    desc: `Этоть материал изготавливаемый путём склеивания специально подготовленного шпона.`,
    img: img_6,
    images: [img3],
  },
];

const slideBackgrounds = [
  "#256DB7",
  "#94716B",
  "#FFB303",
  "#97E8B5",
  "#FFA509",
];

function Cards() {
  const { data } = useContext(Contexts);
  return (
    <div style={{ padding: "20px" }}>
      <div>
        <Swiper className="mySwiper">
          {sliderList.map((sl, index) => (
            <SwiperSlide
              key={index}
              className="w-80 h-80 sliders"
              style={{
                background: "#f3f3f340",
                width: "440px",
                height: "550px",
              }}
            >
              <div
                className="p-8 pr-5 ps-5 text-white"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "320px",
                  backgroundImage: `url(${sl.images})`,
                  backgroundSize: "cover",
                  width: "80%",
                  height: "100%",
                  borderRadius: "40px",
                }}
              >
                <div className="w-72 text-start">
                  <p style={{ fontSize: "50px", marginBottom: "20px" }}>
                    {sl.title}
                  </p>
                  <p className="w-96" style={{ fontSize: "25px" }}>
                    {sl.desc}
                  </p>
                </div>
                <img
                  src={sl.img}
                  alt=""
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-between align-middle mb-14 p-8">
        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>Категории</h1>
        <Link to={"/allCategories"}>Все категории</Link>
      </div>
      <div className="grid grid-cols-2 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mx-auto">
        {data.slice(0, 6).map((item) => (
          <Link to={`productList/${item.id}`} key={item.id}>
            <div
              style={{
                background: "white",
                textAlign: "center",
                padding: "20px",
                borderRadius: "10px",
                height: "200px",
                width: "150px",
              }}
              className="mx-auto"
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Cards1 />
      <Cards2 />
    </div>
  );
}

export default Cards;
