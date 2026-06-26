import { Image } from "antd";
import Slider from "react-slick";

function SliderComponent({ arrImages }) {
  const SlickSlider = Slider.default;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <SlickSlider {...settings}>
      {arrImages.map((image) => {
        return <Image src={image} alt={image} preview={false} width="100%" />;
      })}
    </SlickSlider>
  );
}

export default SliderComponent;
