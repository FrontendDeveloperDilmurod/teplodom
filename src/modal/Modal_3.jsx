import React, { useState } from "react";
import { Button, Form, Input, Modal, Upload, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

function PassportInfoModal({ isModalOpen_3, setIsModalOpen_3 }) {
  const [orders, setOrders] = useState(true);
  const next = () => {
    setOrders((prev) => !prev);
  };
  const handleOk = () => {
    setIsModalOpen_3(false);
  };
  const handleCancel = () => {
    setIsModalOpen_3(false);
  };
  const onFinish = (values) => {
    console.log("Form values:", values);
  };
  return (
    <Modal
      open={isModalOpen_3}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      centered={true}
      footer={null}
      style={{ top: 20 }}
    >
      {orders ? (
        <div style={{ padding: "20px 40px" }}>
          <Title level={3}>Личные данные</Title>
          <Text strong style={{ fontSize: "16px", color: "#666" }}>
            Информация паспорта
          </Text>

          <Form
            layout="vertical"
            onFinish={onFinish}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            <Form.Item
              label="ПИНФЛ"
              name="pinfl"
              style={{ flex: "1 1 100%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Введите ПИНФЛ" />
            </Form.Item>

            <Form.Item
              label="Серия"
              name="series"
              style={{ flex: "1 1 20%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Серия" />
            </Form.Item>

            <Form.Item
              label="Номер паспорта"
              name="passportNumber"
              style={{ flex: "1 1 35%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Номер паспорта" />
            </Form.Item>

            <Form.Item
              label="Дата рождения"
              name="birthDate"
              style={{ flex: "1 1 35%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Дата рождения" />
            </Form.Item>

            <Form.Item
              label="Имя"
              name="firstName"
              style={{ flex: "1 1 30%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Введите имя" />
            </Form.Item>

            <Form.Item
              label="Фамилия"
              name="lastName"
              style={{ flex: "1 1 30%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Введите фамилию" />
            </Form.Item>

            <Form.Item
              label="Отчество"
              name="middleName"
              style={{ flex: "1 1 30%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Введите отчество" />
            </Form.Item>

            <Form.Item
              label="Номер телефона"
              name="phoneNumber"
              style={{ flex: "1 1 48%" }}
            >
              <Input placeholder="Введите номер телефона" />
            </Form.Item>

            <Form.Item
              label="Дополнительный номер"
              name="additionalPhoneNumber"
              style={{ flex: "1 1 48%" }}
            >
              <Input placeholder="Введите дополнительный номер" />
            </Form.Item>

            <Form.Item
              label="Область"
              name="region"
              style={{ flex: "1 1 30%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Введите область" />
            </Form.Item>

            <Form.Item
              label="Город"
              name="city"
              style={{ flex: "1 1 30%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Введите город" />
            </Form.Item>

            <Form.Item
              label="Адрес"
              name="address"
              style={{ flex: "1 1 100%" }}
              rules={[{ required: true, message: "Это поле обязательно" }]}
            >
              <Input placeholder="Введите адрес" />
            </Form.Item>

            <div className="flex justify-between align-baseline gap-3">
              <Form.Item
                label="Фото паспорта с первой страницы"
                name="passportPhoto"
                style={{ flex: "1 1 48%" }}
              >
                <Input type="file" />
              </Form.Item>

              <Form.Item
                label="Загрузите фото прописки с паспорта"
                name="registrationPhoto"
                style={{ flex: "1 1 48%" }}
              >
                <Input type="file" />
              </Form.Item>
              <Form.Item
                label="Загрузите фото лица на фоне паспорта"
                name="facePhoto"
                style={{ flex: "1 1 48%" }}
              >
                <Input type="file" />
              </Form.Item>
            </div>

            <Form.Item
              style={{
                flex: "1 1 100%",
                textAlign: "right",
                marginTop: "20px",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  backgroundColor: "#FFB12A",
                  border: "none",
                  padding: "8px 24px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                onClick={next}
              >
                Следующий
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div className="text-center">
            <div className="mb-5 text-center">
              <p className="text-3xl mb-2" style={{ fontWeight: "bold" }}>
                Спасиба за покупка !
              </p>
              <p style={{ fontWeight: "bold" }}>Ваш номер заказ №127836</p>
            </div>
            <Link to={"/"}>
              <Button
                onClick={handleCancel}
                style={{
                  backgroundColor: "#FFB12A",
                  border: "none",
                  padding: "8px 24px",
                  // fontSize: "16px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Главная страница
              </Button>
            </Link>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default PassportInfoModal;
