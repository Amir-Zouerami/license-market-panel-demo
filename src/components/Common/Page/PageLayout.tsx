import { ReactNode } from "react";
import styles from "./pagelayout.module.scss";

interface PageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.content}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default PageLayout;
