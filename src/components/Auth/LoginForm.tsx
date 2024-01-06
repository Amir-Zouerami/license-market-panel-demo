import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import submitlogin from "@/lib/apiHandlers/Login/submitLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [api, contextHolder] = notification.useNotification({ rtl: true });

  return (
    <div>
      {contextHolder}

      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={async userLoginCredentials => {
          setloading(true);
          await submitlogin({
            userLoginCredentials,
            api,
            navigate,
          });
          setloading(false);
        }}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "لطفا ایمیل خود را وارد کنید!",
              type: "email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
            placeholder="ایمیل"
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
  );
};

export default LoginForm;
