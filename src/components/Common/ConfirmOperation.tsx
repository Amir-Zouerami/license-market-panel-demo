import { Popconfirm } from "antd";
import { ReactNode } from "react";

interface ConfirmOperationProps {
  title: string;
  description: string;
  onConfirm: () => void;
  children: ReactNode;
}

const ConfirmOperation = ({
  title,
  description,
  onConfirm,
  children,
}: ConfirmOperationProps) => {
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      okText="بله"
      cancelText="خیر"
    >
      {children}
    </Popconfirm>
  );
};

export default ConfirmOperation;
