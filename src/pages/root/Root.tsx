import styles from "./root.module.scss";

const Root = () => (
  <div className={styles.panelMainPage}>
    <h1>به پنل لایسنس مارکت خوش آمدید!</h1>
    <p>
      شما می توانید از منوی بالای صفحه به بخش مورد نظر خود دسترسی داشته باشید.
    </p>

    <div className="customBg"></div>
  </div>
);

export default Root;
