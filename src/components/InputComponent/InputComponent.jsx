import { Input } from "antd";

function InputComponent({ size, placeholder, style, ...rest }) {
  return (
    <Input
      size={size}
      placeholder={placeholder}
      style={style}
      {...rest}
    />
  );
}

export default InputComponent;
