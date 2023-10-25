import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Order = () => {
   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className=" py-16">
       <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
          <img className=" w-full" src={img1} alt="" />
          <h2 className=" uppercase text-white -mt-10 text-2xl">Salad</h2>
          </div>
          <div>
          <img className=" w-full" src={img2} alt="" />
          <h2 className=" uppercase text-white -mt-10 text-2xl">Soups</h2>
          </div>
          <div>
          <img className=" w-full" src={img3} alt="" />
          <h2 className=" uppercase text-white -mt-10 text-2xl">pizzas</h2>
          </div>
          <div>
          <img className=" w-full" src={img4} alt="" />
          <h2 className=" uppercase text-white -mt-10 text-2xl">desserts</h2>
          </div>
          <div>
          <img className=" w-full" src={img5} alt="" />
          <h2 className=" uppercase text-white -mt-10 text-2xl">Salad</h2>
          </div>
          
        </Slider>
    </div>
  );
};

export default Order;