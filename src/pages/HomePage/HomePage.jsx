import "./style.css";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";

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
      <div id="container" style={{ padding: "0 120px" , backgroundColor: "#efefef"}}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>
    </>
  );
}

export default HomePage;
