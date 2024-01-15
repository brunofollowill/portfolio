import React from 'react';
import Slider from 'react-slick';
import Rectangle from '../../Rectangle';
import QuizBiblia from '../../../assets/img/quiz.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div>
      <div className="w-3/5 max-sm:w-80  mt-20 max-sm:flex max-sm:flex-col  mx-auto">
        <h1 className="font-black text-4xl border-b-2 text-slate-700 border-slate-200 w-[250px] mt-5">
          Projetos
        </h1>
        <Slider {...settings}>
          <Rectangle link="https://quizbiblia.com.br/" alt="QuizBiblia" src={QuizBiblia} />
          <Rectangle link="https://quizbiblia.com.br/" alt="QuizBiblia" src={QuizBiblia} />
          <Rectangle link="https://quizbiblia.com.br/" alt="QuizBiblia" src={QuizBiblia} />
          <Rectangle link="https://quizbiblia.com.br/" alt="QuizBiblia" src={QuizBiblia} />
          <Rectangle link="https://quizbiblia.com.br/" alt="QuizBiblia" src={QuizBiblia} />
          <Rectangle link="https://quizbiblia.com.br/" alt="QuizBiblia" src={QuizBiblia} />
        </Slider>
      </div>
    </div>
  );
}
