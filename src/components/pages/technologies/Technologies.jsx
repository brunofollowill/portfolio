import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TypescriptSvg from "../../../assets/svg/icons/TypescriptSvg";
import CssSvg from "../../../assets/svg/icons/Css-Svg";
import HtmlSvg from "../../../assets/svg/icons/HtmlSvg";
import JavascriptSvg from "../../../assets/svg/icons/JavascriptSvg";
import Node from "../../../assets/svg/icons/NodeSvg";
import Express from "../../../assets/svg/icons/ExpressSvg";
import ReactSvg from "../../../assets/svg/icons/ReactSvg";
import TailwindSvg from "../../../assets/svg/icons/TailwindSvg";

export default function TechnologiesCarousel() {
  const icons = [
    <HtmlSvg key="html" largura="70px" altura="70px" />,
    <CssSvg key="css" largura="70px" altura="70px" />,
    <JavascriptSvg key="javascript" largura="70px" altura="70px" />,
    <TypescriptSvg key="typescript" largura="70px" altura="70px" />,
    <Node key="node" largura="70px" altura="70px" />,
    <Express key="express" largura="70px" altura="70px" />,
    <ReactSvg key="react" largura="70px" altura="70px" />,
    <TailwindSvg key="tailwind" largura="70px" altura="70px" />,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,         // Enable automatic scrolling
    autoplaySpeed: 500,    // Set the speed of automatic scrolling in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[850px]  max-sm:w-full m-auto mt-20">
      <h1 className="font-extralight max-sm:ml-6 text-gray-600">Tecnologias que eu uso...</h1>
      <div className="m-auto p-5  bg-white/30 z-10 max-sm:rounded-none rounded-2xl shadow-slate-600">
        <Slider {...settings}>{icons}</Slider>
      </div>
    </div>
  );
}
