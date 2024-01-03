import { useRouteError } from "react-router-dom";
import { getErrorMessage } from "./router-error-check";
import { Button } from "antd";

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);

  return (
    <div className="panel-error-page-container">
      <h1>خطا!</h1>
      <p>متاسفانه مشکلی پیش آمده است...</p>
      <p>
        <i>{errorMessage}</i>
      </p>

      {/* Used on purpose to fully refresh the page to main page */}
      <Button href="/">برگشت به صفحه ی اصلی</Button>
    </div>
  );
}
