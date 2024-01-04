import { Result } from "antd";
import BackToMainPageButton from "./BackToMainPageButton";

const E404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="متاسفانه چنین صفحه ای وجود ندارد."
    extra={<BackToMainPageButton />}
  />
);

export default E404;
