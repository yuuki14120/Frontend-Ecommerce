import { Card } from "antd";
import { StarFilled } from "@ant-design/icons";
import "./style.css";
import logo from "../../assets/images/logo.png";

function CardComponent() {
  return (
    <Card
      className="WrapperCardStyle"
      hoverable
      variant="borderless"
      style={{ width: 240, borderRadius: "0px" }}
      cover={
        <img
          style={{ borderRadius: "0px" }}
          draggable={false}
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: "0",
          left: "0",
          borderTopLeftRadius: "3px",
        }}
      />
      <div className="StyleNameProduct">Iphone</div>
      <div className="WrapperReportText">
        <span style={{ marginRight: "4px" }}>
          <span>4.6</span>{" "}
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <span> | Đã bán 1000+</span>
      </div>
      <div className="WrapperPriceText">
        1.000.000d
        <span className="WrapperDiscountText">-5%</span>
      </div>
    </Card>
  );
}

export default CardComponent;
