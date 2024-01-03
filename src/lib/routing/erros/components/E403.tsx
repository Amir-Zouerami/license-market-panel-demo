import { Result } from "antd";
import BackToMainPageButton from "../BackToMainPageButton";

const E403 = () => (
  <Result
    status="403"
    title="403"
    subTitle="شما اجازه ی دسترسی به این صفحه را ندارید."
    extra={<BackToMainPageButton />}
  />
);

export default E403;
