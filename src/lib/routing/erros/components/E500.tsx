import { Result } from "antd";
import BackToMainPageButton from "../BackToMainPageButton";

const E500 = () => (
  <Result
    status="500"
    title="500"
    subTitle="متاسفانه درخواست شما با خطایی نامعلوم مواجه شده است."
    extra={<BackToMainPageButton />}
  />
);

export default E500;
