import React from "react";
import Slider from "react-slick";
const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center h-full  bg-gray-200 pl-6">
          <div>
            <div className="text-5xl font-bold h-4/5">
              Aradığınız herşey burada!!
            </div>
            <div className="text-lg- my-2 ">
              Alışverişin tadını myshop ile çıkarın .En güncel seçenekler , renk
              renk , model model Aradığınız herşey burada. Uygun fiyat ve
              aradığınız kalite için şimdi MYSHOP zamanı!!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 shadow-slate-400">
              İncele
            </div>
          </div>
          <div className="-p-2">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bcxnfl2seca3k7mbexzi/p-6000-ayakkab%C4%B1-1Tw8bs.png"
              alt=""
            />
          </div>
        </div>

        <div className="!flex items-center h-full  bg-gray-200 pl-6">
          <div>
            <div className="text-5xl font-bold h-4/5">
              Aradığınız herşey burada!!
            </div>
            <div className="text-lg- my-2 ">
              Alışverişin tadını myshop ile çıkarın .En güncel seçenekler , renk
              renk , model model Aradığınız herşey burada. Uygun fiyat ve
              aradığınız kalite için şimdi MYSHOP zamanı!!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-300 shadow-slate-400">
              İncele
            </div>
          </div>
          <div className="-p-2">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bcxnfl2seca3k7mbexzi/p-6000-ayakkab%C4%B1-1Tw8bs.png"
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
