import useCreateProduct from "@/lib/apiHandlers/Products/SubmitHandler";
import { Button, Form, Input, notification } from "antd";
import { MedicineBoxOutlined } from "@ant-design/icons";

const CreateNewProduct = () => {
  const [api, contextHolder] = notification.useNotification({ rtl: true });
  const { mutate, isPending } = useCreateProduct(api);
  const [form] = Form.useForm();

  return (
    <div style={{ margin: "30px 10px" }}>
      {contextHolder}
      <Form
        form={form}
        layout={"inline"}
        name="createNewProduct"
        onFinish={mutate}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="نام"
          name="productName"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "لطفا نام محصول را وارد کنید!",
              type: "string",
            },
          ]}
        >
          <Input
            prefix={<MedicineBoxOutlined />}
            name="productName"
            placeholder="نام محصول جدید را وارد کنید..."
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            ثبت محصول
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateNewProduct;
