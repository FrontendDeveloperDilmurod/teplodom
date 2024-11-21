import React from "react";
import { CiLocationOn } from "react-icons/ci";
import imgs from "../footer/footer.png";
import { BsTelephone } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import "../footer/footer.css";

function Footer() {
  return (
    <div className="min-height">
      <div
        className="grid grid-cols-1 gap-16 justify-between align-middle sm:grid-cols-2 md:grid-cols-2 outlet"
        style={{
          background: "#2D2B45",
          width: "100%",
          padding: "20px",
          color: "white",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <img src={imgs} alt="" style={{ width: "100px", height: "100px" }} />
          <div>
            <h4>TEPLODOM</h4>
            <p style={{ fontSize: "15px" }}>
              Online store construction materials
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                gap: "20px",
                marginTop: "20px",
              }}
            >
              <CiLocationOn style={{ fontSize: "30px" }} />
              <p>ul. Usta Shirin, market</p>
              <p>Jamii, house 134</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between align-middle gap-5">
          <ul style={{ listStyle: "none" }}>
            <li>
              <h4 className="text-2xl mb-2">Quick links</h4>
            </li>
            <li>For masters</li>
            <li>Placing an order</li>
            <li>User Agreement</li>
          </ul>

          <ul style={{ listStyle: "none" }}>
            <li>
              <h4 className="text-2xl mb-2">Useful</h4>
            </li>
            <li>About Us</li>
            <li>For suppliers</li>
            <li>Return of goods</li>
          </ul>

          <ul style={{ listStyle: "none" }}>
            <li>
              <h4 className="text-2xl">Contact</h4>
            </li>
            <li className="flex justify-around gap-3">
              <BsTelephone /> +998 97 761 62 51
            </li>
            <li className="flex justify-around gap-3">
              <BsTelephone /> +998 93 556 91 31
            </li>
            <li className="flex justify-between align-middle">
              <FaTelegram /> <FaInstagram /> <FaFacebook />
              <IoIosGlobe />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
