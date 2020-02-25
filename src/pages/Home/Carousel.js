import React from "react";
import Swiper from "react-id-swiper";
import Card from "./Card";

export default function({ sliderContent, sliderTitle }) {
  const data = Array.from(sliderContent);
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: false
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  };
  return (
    <div class="slider-container">
      <div class="slider-title">
        <h3 class="title-main montserrat-b section-cat-title">{sliderTitle}</h3>
        <hr class="slider-title-hr"/>
      </div>

      <Swiper {...params}>
        {data &&
          data.map((el, i) => (
            // <Card img={el.image_url} content={el.content} />
            <div className="card" key={i}>
              <img src={el.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text montserrat-r">{el.Author}</p>
                <h5 className="card-title montserrat-b">{el.content}</h5>
              </div>
            </div>
          ))}
      </Swiper>
    </div>
  );
}
