import React, { useState } from "react";
import Swiper from "react-id-swiper";
import { useHistory } from "react-router-dom";
import Card from "./Card";
import video from "../../assets/img/video.png";

export default function({ sliderContent, sliderTitle, sliderType }) {
  const data = Array.from(sliderContent.data);
  const params = {
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
  let history = useHistory();
  const goToPage = (id, type) => {
    history.push(`/${type}/${id}`);
  };

  return (
    <div className="slider-container">
      <div className="slider-title">
        <h3 className="title-main montserrat-b section-cat-title">
          {sliderTitle}
        </h3>
        <hr className="slider-title-hr" />
      </div>

      <Swiper {...params}>
        {data &&
          data.map((el, i) => {
            // const leaderImg =
            //   sliderContent.type !== "leaders"
            //     ? video
            //     : require(`../../assets/img/leaders/leaders_${el.id}.jpg`);
            // const leaderImg = video;
            let leaderImg = "";
            if (el.type === "leaders") {
              leaderImg = require(`../../assets/img/leaders/leaders_${el.id}.jpg`);
            } else {
              leaderImg = video;
            }

            return (
              <div
                className="card slide-card"
                key={i}
                onClick={() => goToPage(el.id, el.type)}
              >
                <img className="card-img-top" src={leaderImg} alt="..." />

                <div className="card-body">
                  <p className="card-text montserrat-r">
                    {el.author || el.position}
                  </p>
                  <h5 className="card-title montserrat-b">
                    {el.title || el.name + " " + el.lastname}
                  </h5>
                </div>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
}
