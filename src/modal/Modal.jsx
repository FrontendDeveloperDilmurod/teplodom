import React, { useContext, useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { Contexts } from "../App";

const Modals = ({ modal2Open, setModal2Open }) => {
  const { protect, setProtect } = useContext(Contexts);
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin((prev) => !prev);
  };

  const onFinish = (values) => {
    if (
      !values.username ||
      !values.phone ||
      !values.password ||
      !values.Cpassword
    ) {
      setProtect(false);
    } else {
      setProtect(true);
      setModal2Open(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Modal
        title="Registration"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <button onClick={handleLogin}>Voyti</button>
        {login ? (
          <></>
        ) : (
          <>
            {" "}
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Your Name"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Email or phone number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input email or phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm password"
                name="Cpassword"
                rules={[
                  {
                    required: true,
                    message: "Please Confirm password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Form>
          </>
        )}
      </Modal>
    </>
  );
};

export default Modals;
