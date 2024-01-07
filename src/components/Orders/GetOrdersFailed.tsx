interface GetOrdersFailedProps {
  type: "unauthorized" | "unknown";
}

const GetOrdersFailed = ({ type }: GetOrdersFailedProps) => {
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
