import { Button } from "antd";

function ButtonComponent({
  size,
  textButton,
  styleTextButton,
  styleButton,
  ...rest
}) {
  return (
    <Button size={size} style={styleButton} {...rest}>
      <span style={styleTextButton}>{textButton}</span>
    </Button>
  );
}

export default ButtonComponent;
