import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import { useSetRecoilState } from "recoil";
import { boxIdState } from "components/states";

const BoxSlider = () => {
  const setBoxId = useSetRecoilState(boxIdState);

  const CustomPrevArrow = ({ onClick, currentSlide }) => {
    return (
      <div
        className="absolute top-48 -left-16 w-8 h-8 cursor-pointer"
        onClick={() => {
          onClick();
          setBoxId(currentSlide);
        }}
      >
        <Image layout="fill" src="/images/box/prev.png" />
      </div>
    );
  };

  const CustomNextArrow = ({ onClick, currentSlide }) => {
    return (
      <div
        className="absolute top-48 -right-16 w-8 h-8 cursor-pointer"
        onClick={() => {
          onClick();
          setBoxId(currentSlide);
        }}
      >
        <Image layout="fill" src="/images/box/next.png" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className="w-6/12 m-auto text-3xl text-box_text text-center font-[GmarketSansBold] italic">
      <Slider {...settings}>
        <div>
          <div className="relative w-120 h-96 m-auto">
            <Image
              layout="fill"
              src="/images/box/box_normal.png"
              alt="Normal"
            />
          </div>
          <p className="text-shadow">Normal Box</p>
        </div>
        <div>
          <div className="relative w-120 h-96 m-auto">
            <Image layout="fill" src="/images/box/box_rare.png" alt="Rare" />
          </div>
          <p className="text-shadow">Rare Box</p>
        </div>
        <div>
          <div>
            <div className="relative w-120 h-96 m-auto">
              <Image
                layout="fill"
                src="/images/box/box_unique.png"
                alt="Unique"
              />
            </div>
            <p className="text-shadow">Unique Box</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BoxSlider;
