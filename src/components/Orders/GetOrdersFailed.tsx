import tokenIsValid from "@/lib/JWT/tokenIsValid";
import { Navigate } from "react-router-dom";

interface GetOrdersFailedProps {
  type: "unauthorized" | "unknown";
}

const GetOrdersFailed = ({ type }: GetOrdersFailedProps) => {
  const authed = tokenIsValid();
  if (!authed) return <Navigate to={"/login"} replace />;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "IRANSansBold",
      }}
    >
      {type === "unauthorized" ? (
        <h2>شما اجازه ی دسترسی به این صفحه را ندارید.</h2>
      ) : (
        <h2>متاسفانه خطایی رخ داده است.</h2>
      )}
    </div>
  );
};

export default GetOrdersFailed;
