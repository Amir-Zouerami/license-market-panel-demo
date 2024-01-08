import OrdersTable from "@/components/Orders/OrdersTable";
import PageLayout from "@/components/Common/Page/PageLayout";

const Orders = () => {
  return (
    <PageLayout
      title="لیست سفارشات"
      description="در این بخش سفارشات را بسته به سطح دسترسی خود مشاهده می کنید."
    >
      <OrdersTable />
    </PageLayout>
  );
};

export default Orders;
