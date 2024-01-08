import { submitNewProduct } from "@/lib/apiHandlers/Products/SubmitHandler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, notification } from "antd";
import { MedicineBoxOutlined } from "@ant-design/icons";

const CreateNewProduct = () => {
  const [api, contextHolder] = notification.useNotification({ rtl: true });
  const QC = useQueryClient();
  const [form] = Form.useForm();

  const { mutate, isPending } = useMutation({
    mutationFn: submitNewProduct,
    onSuccess: () => {
      // This is to make useQuery fetch the list of products again
      QC.invalidateQueries({
        queryKey: ["getAllPaginatedProducts"],
        exact: false,
      });

      return api["success"]({
        message: "انجام شد!",
        description: "محصول جدید ثبت شده است.",
      });
    },
    onError: () => {
      return api["error"]({
        message: "خطا!",
        description:
          "خطایی رخ داده است. لطفا از یکتا بودن نام محصول اطمینان حاصل کنید.",
      });
    },
  });

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
