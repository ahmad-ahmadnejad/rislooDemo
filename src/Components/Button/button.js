import { Button as AntdButton } from "antd";

const Button = (props) => {
  return (
    <AntdButton type={props.type || "primary"} {...props}>
      {props.children}
    </AntdButton>
  );
};

export default Button;
