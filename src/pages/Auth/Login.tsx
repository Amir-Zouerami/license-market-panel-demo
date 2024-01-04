import styles from "./login.module.scss";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Title } = Typography;

const Login = () => {
  const [loading, setloading] = useState(false);

  const submit = (values: any) => {
    setloading(true);
    console.log("Received values of form: ", values);
    setloading(false);
  };

  return (
    <div className={styles.loginContainer}>
      <Title>ورود به پنل کاربری</Title>
      <div>
        <Form
          name="normal_login"
          // className="login-form"
          initialValues={{ remember: true }}
          onFinish={submit}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                whitespace: true,
                message: "لطفا نام کاربری خود را وارد کنید!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="نام کاربری"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "لطفا رمز عبور خود را وارد کنید!" },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              size="large"
              placeholder="رمز عبور"
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              size="large"
              htmlType="submit"
              className="login-form-button"
            >
              ورود به حساب
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
