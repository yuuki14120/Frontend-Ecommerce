import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function ButtonInputSearch(props) {
  const {
    size,
    placeholder,
    textButton,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13, 92, 182)",
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{ backgroundColor: backgroundColorInput, borderRadius: "0px" }}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined />}
        styleButton={{
          borderRadius: "0px",
          border: "none",
          backgroundColor: backgroundColorButton,
          color: "#fff",
        }}
        styleTextButton={{color: "#fff"}}
        textButton={textButton}
      />
    </div>
  );
}

export default ButtonInputSearch;
