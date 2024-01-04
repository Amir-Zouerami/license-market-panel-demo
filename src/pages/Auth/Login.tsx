import styles from "./login.module.scss";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  const { Title } = Typography;
  const onSubmit = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className={styles.loginContainer}>
      <Title>ورود به پنل کاربری</Title>
      <div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
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
