import { useRouteError } from "react-router-dom";
import { getErrorMessage } from "./router-error-check";
import E404 from "@/components/routing/E404";
import E403 from "@/components/routing/E403";
import E500 from "@/components/routing/E500";
import { Button, Typography } from "antd";
const { Title } = Typography;

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);
  // console.log(errorMessage);

  return (
    <div className="panel-error-page-container">
      {errorMessage.status === 404 ? (
        <E404 />
      ) : errorMessage.status === 403 ? (
        <E403 />
      ) : errorMessage.status === 500 ? (
        <E500 />
      ) : (
        <>
          <Title style={{ margin: "20px 0" }}>
            متاسفانه خطایی پیش آمده است.
          </Title>
          <Button type="primary" href="/">
            برگشت به صفحه ی اصلی
          </Button>
        </>
      )}
    </div>
  );
}
