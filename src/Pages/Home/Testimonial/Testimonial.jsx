import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Testimonial = () => {

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviwes')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, []);
  console.log(reviews);
 
  

  return (
    <div>
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
          reviews.map(rev => <SwiperSlide>
            <div className="py-10">
                <div className="flex flex-col items-center mx-24 my-16">
                          {/* <Rating
                                style={{ maxWidth: 180 }}
                                value={rev.rating}
                                readOnly
                            /> */}
                            <p className="py-8">{rev.details}</p>
                            <h3 className="text-2xl text-orange-400">{rev.name}</h3>
                        </div>
            </div>
          </SwiperSlide>)
     }
      
     
    </Swiper>
        </div>

  );
};

export default Testimonial;