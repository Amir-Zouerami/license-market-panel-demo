import { Button } from "antd";

const BackToMainPageButton = () => {
  {
    /* Used antd <Button /> instead of react-router <Link /> on purpose
    to fully refresh the page to main page */
  }

  return (
    <Button href="/" type="primary">
      برگشت به صفحه ی اصلی
    </Button>
  );
};

export default BackToMainPageButton;
