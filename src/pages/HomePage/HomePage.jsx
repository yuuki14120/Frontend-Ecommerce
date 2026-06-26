import "./style.css";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

function HomePage() {
  const arr = ["TV", "Laptop", "Điện Thoại"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <div className="WrapperTypeProduct">
          {arr.map((item) => {
            return <TypeProduct key={item} name={item} />;
          })}
        </div>
      </div>
      <div
        id="container"
        style={{ padding: "0 120px", backgroundColor: "#efefef", height: '1000px' }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <div
          style={{ display: "flex", marginTop: "20px", alignItems: "center", gap: '20px' }}
        >
          <CardComponent />
        </div>
        <NavbarComponent/>
      </div>
    </>
  );
}

export default HomePage;
