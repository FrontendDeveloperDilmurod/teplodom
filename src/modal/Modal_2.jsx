import { useStatStyles } from "@chakra-ui/react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Modal_2({ isModalOpen, setIsModalOpen }) {
  const [order, setOrder] = useState(false);

  const orders = () => {
    setIsModalOpen(false);
    setOrder(true);
    toast.success("Заказ успешно оформлен!", {
      position: "top-center",
      autoClose: 600,
    });
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width="70%"
        footer={null}
      >
        <div className="p-9 w-full">
          <p className="text-3xl mb-5" style={{ fontWeight: "bold" }}>
            Оформление заказа
          </p>
          <p className="text-2xl mb-4">Купить Пеноплекс Основа</p>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 1000,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="flex justify-between gap-5">
              <div>
                <Form.Item
                  label="Введите Штук"
                  name="bведитеШтук"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input style={{ padding: "8px", width: "110%" }} />
                </Form.Item>

                <Form.Item
                  label="Введите имя"
                  name="bведитеимя"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input style={{ padding: "8px", width: "110%" }} />
                </Form.Item>

                <Form.Item
                  label="Введите город / район"
                  name="bведите"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input style={{ padding: "8px", width: "110%" }} />
                </Form.Item>
              </div>

              <div>
                <Form.Item
                  label="Введите адресс"
                  name="адресс"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input style={{ padding: "8px", width: "110%" }} />
                </Form.Item>

                <Form.Item
                  label="Введите номер телефона"
                  name="номер"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input style={{ padding: "8px", width: "110%" }} />
                </Form.Item>

                <Form.Item
                  label="Введите область"
                  name="область"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input style={{ padding: "8px", width: "110%" }} />
                </Form.Item>
              </div>
            </div>

            <Form.Item
              label="Введите населённый пункт"
              name="пункт"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input style={{ padding: "8px", width: "104%" }} />
            </Form.Item>
            <Form.Item
              name="пункт"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Checkbox /> Я согласен с правилами публичной оферты
            </Form.Item>
            <Button
              style={{
                backgroundColor: "#FFB12A",
                border: "0",
                color: "white",
              }}
              onClick={orders}
            >
              Оформить заказ
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default Modal_2;
