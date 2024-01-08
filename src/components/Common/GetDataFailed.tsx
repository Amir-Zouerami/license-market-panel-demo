import tokenIsValid from "@/lib/JWT/tokenIsValid";
import { Navigate } from "react-router-dom";

interface GetDataFailedProps {
  type: "unauthorized" | "unknown";
}

const GetDataFailed = ({ type }: GetDataFailedProps) => {
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

export default GetDataFailed;
