import React, { useContext, useState } from "react";
import img1 from "../header/header.jpg";
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons"; // Search icon import qilindi
import { Link, NavLink } from "react-router-dom";
import { Contexts } from "../App";
import "../header/header.css";
import Modals from "../modal/Modal";

function Header() {
  const { data, like, basket } = useContext(Contexts);
  const [modal2Open, setModal2Open] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const toggleModal2 = () => {
    setModal2Open(!modal2Open);
  };

  const searchIn = () => {
    if (searchQuery.trim() === "") {
      setFilteredData([]);
      setShowSearchModal(false);
    } else {
      const result = data.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(result);
      setShowSearchModal(true);
    }
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  return (
    <div className="bg-[#f7f7f7] py-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-4">
        {/* Logo and Title */}
        <NavLink to="/">
          <div className="flex items-center gap-3">
            <img src={img1} alt="Logo" className="w-16 h-auto" />
            <div>
              <h2 className="text-[#FFB12A] font-bold text-lg md:text-xl">
                TEPLODOM
              </h2>
              <p className="text-sm md:text-base">
                Online store construction materials
              </p>
            </div>
          </div>
        </NavLink>

        {/* Search Input */}
        <div className="relative w-full md:w-auto flex items-center gap-2">
          <Input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            style={{ width: "350px" }}
            className="md:w-full p-3 rounded-xl shadow-md outline-none"
            placeholder="Search..."
          />
          <Button
            onClick={searchIn}
            className="bg-[#FFB12A] text-white px-4 rounded-lg flex items-center justify-center"
            shape="circle" // Icon tugmasini aylana shaklida qilish
            icon={<SearchOutlined style={{ fontSize: "20px" }} />} // Ikonka
          />

          {/* Modalga o'xshash qidiruv natijalari */}
          {showSearchModal && (
            <div className="absolute left-0 top-12 w-[350px] bg-white shadow-lg rounded-lg p-4 z-50">
              <Button
                onClick={closeSearchModal}
                className="absolute top-1 right-1 text-gray-600"
                size="small"
              >
                X
              </Button>
              {filteredData.length > 0 ? (
                <ul>
                  {filteredData.map((item) => (
                    <Link to={`/productList/${item.id}`} key={item.id}>
                      <li className="border-b p-2 hover:bg-gray-100 cursor-pointer">
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No items found</p>
              )}
            </div>
          )}
        </div>

        {/* Icons (Like, Basket, Profile) */}
        <div className="flex gap-4 justify-around">
          <Link to="/like" className="relative">
            {like.length > 0 && (
              <span className="badge absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                {like.length}
              </span>
            )}
            <Button className="button_1 flex items-center justify-center">
              <FaRegHeart />
            </Button>
          </Link>

          <Link to="/basket" className="relative">
            {basket.length > 0 && (
              <span className="badge absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                {basket.length}
              </span>
            )}
            <Button className="button_1 flex items-center justify-center">
              <GiShoppingBag />
            </Button>
          </Link>

          <Button
            className="button_1 flex items-center justify-center"
            onClick={toggleModal2}
          >
            <GoPerson /> Profile
          </Button>
        </div>
      </div>

      <Modals modal2Open={modal2Open} setModal2Open={setModal2Open} />
    </div>
  );
}

export default Header;
