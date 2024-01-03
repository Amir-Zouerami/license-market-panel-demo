import { useRouteError } from "react-router-dom";
import { getErrorMessage } from "./router-error-check";
import E404 from "./components/E404";
import E403 from "./components/E403";
import E500 from "./components/E500";

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);
  console.log(errorMessage);

  return (
    <div className="panel-error-page-container">
      {errorMessage.status === 404 ? (
        <E404 />
      ) : errorMessage.status === 403 ? (
        <E403 />
      ) : errorMessage.status === 500 ? (
        <E500 />
      ) : (
        <h1>متاسفانه خطایی پیش آمده است.</h1>
      )}
    </div>
  );
}
