import React from "react";
import "../App.css";
import { MdPhoneIphone } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { LuCalendarClock } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";

function Dastavka() {
  return (
    <div className=" container container_product mb-20">
      <h1 className="text-start font-semibold text-3xl ms-10">Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-10">
        {/* Card 1 */}
        <div className="w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer">
          <div className="contact_border">
            <MdPhoneIphone size={40} />
          </div>
          <h2 className="font-bold text-center mt-2">Телефон</h2>
          <p className="text-center">+998 (97) 761 62 51</p>
        </div>

        {/* Card 2 */}
        <div className="w-[290px] h-[200px] flex flex-col justify-center items-center cursor-pointer">
          <div className="contact_border">
            <FiMapPin size={40} />
          </div>
          <h2 className="font-bold text-center mt-2">Локация</h2>
          <p className="text-center ">
            ул. Уста Ширин, рынок Джамий,
            <br />
            дом 134, магазин 131
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer">
          <div className="contact_border">
            <CgMail size={40} />
          </div>
          <h2 className="font-bold text-center mt-2">Е-майл</h2>
          <p className="text-center">Sardorraimov@gmail.com</p>
        </div>

        {/* Card 4 */}
        <div className="w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer">
          <div className="contact_border">
            <MdPhoneIphone size={40} />
          </div>
          <h2 className="font-bold text-center mt-2">Телефон</h2>
          <p className="text-center">+998 (93) 556 91 31</p>
        </div>

        {/* Card 5 */}
        <div className="w-[290px] h-[200px] flex flex-col justify-center items-center cursor-pointer">
          <div className="contact_border">
            <LuCalendarClock size={40} />
          </div>
          <h2 className="font-bold text-center mt-2">Расписание</h2>
          <p className="text-center">
            Мы в вашем распоряжении <br /> 7 дней в неделю!
          </p>
        </div>

        {/* Card 6 */}
        <div className="w-[200px] h-[200px] flex flex-col justify-center items-center cursor-pointer">
          <div className="contact_border">
            <CiClock2 size={40} />
          </div>
          <h2 className="font-bold text-center mt-2">Время</h2>
          <p className="text-center">Каждый день с 8:00 – 18:00</p>
        </div>
      </div>

      {/* map iframe */}

      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ms-10 mt-20">
        {/* Form starts here */}
        <div>
          <h1 className="font-semibold text-2xl">Заказать обратный звонок</h1>
          <form className="w-[90%] space-y-6 mt-3">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="text-sm text-gray-600 font-semibold"
              >
                Введите имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phone"
                className="text-sm text-gray-600 font-semibold"
              >
                Введите номер телефона
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>

            {/* Comments Input */}
            <div>
              <label
                htmlFor="comments"
                className="text-sm text-gray-600 font-semibold"
              >
                Комментарии
              </label>
              <textarea
                id="comments"
                name="comments"
                className="block w-full p-2 border border-gray-300 rounded h-[130px]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#FFB12A] text-white py-2 px-4 rounded"
            >
              Отправить
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23969.32871827571!2d69.2289536!3d41.327001599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1729778290745!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: 0, width: "600px", borderRadius: "20px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Dastavka;
