// import { getRoleName } from "@/lib/localStorage/localStorage";
import OrdersTable from "@/components/Orders/OrdersTable";
import styles from "./orders.module.scss";

const Orders = () => {
  // const role = getRoleName();

  return (
    <div className={styles.ordersContainer}>
      <div className={styles.content}>
        <div>
          <h1>لیست سفارشات</h1>
          <p>در این بخش سفارشات را بسته به سطح دسترسی خود مشاهده می کنید.</p>
        </div>

        <OrdersTable />
      </div>
    </div>
  );
};

export default Orders;
