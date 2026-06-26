import { Checkbox, Rate } from "antd";
import "./style.css";

function NavbarComponent() {
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => <span key={option}>{option}</span>);
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {options.map((option) => (
              <Checkbox key={option.label} value={option.value}>
                {option.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => (
          <div key={option}>
            <Rate style={{ fontSize: "12px" }} disabled defaultValue={option} />
            <span>{` từ ${option} sao`}</span>
          </div>
        ));
      case "price":
        return options.map((option) => (
          <div className="WrapperTextPrice" key={option}>
            {option}
          </div>
        ));
      default:
        return {};
    }
  };
  return (
    <>
      <h4 className="WrapperLabelText">Danh mục sản phẩm</h4>
      <div className="WrapperContent">
        {renderContent("text", ["tu lanh", "Tv", "May giat"])}
      </div>
      <div className="WrapperContent">
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </div>
      <div className="WrapperContent">{renderContent("star", [3, 4, 5])}</div>
      <div className="WrapperContent">
        {renderContent("price", ["dưới 4.000.000 đ", "trên 5.000.000 đ"])}
      </div>
    </>
  );
}

export default NavbarComponent;
