import { Col, Row } from "antd";
import "./style.css";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

export default function Header() {
  return (
    <>
      <Row className="WrapperHeader">
        <Col
          span={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="WrapperTextHeader">Shop Game</span>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            placeholder="input search text"
            textButton="Tìm kiếm"
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <div className="WrapperHeaderAccount">
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <span>Đăng nhập/Đăng ký</span>
              <div>
                <span>Tài khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
          </div>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <span className="WrapperTextHeaderSmall">Giỏ hàng</span>
          </div>
        </Col>
      </Row>
    </>
  );
}
