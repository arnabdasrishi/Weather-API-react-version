import React from "react";
import "../index.css";

const News = () => {
  return (
    <div className="cities__main">
      <h1>News</h1>

      <div className="cards__grid">
        <div className="indv__card__news">
          <img src="https://i.ibb.co/y6KQ229/sky-1191655-960-720.jpg" alt="delhi" />

          <div className="indv_card_news__details">
            <h2>Clear sunny sky in Kolkata</h2>
          </div>
          <button className="read__more__btn">Read More</button>
        </div>

        <div className="indv__card__news">
          <img src="https://i.ibb.co/f4XMhzs/1096121.jpg" alt="delhi" />

          <div className="indv_card_news__details">
            <h2>Cloudstorms in Manipur</h2>
          </div>
          <button className="read__more__btn">Read More</button>
        </div>
        <div className="indv__card__news">
          <img src="https://i.ibb.co/MN4jJhD/beautiful-cloudy-sky-free-photo.jpg" alt="delhi" />

          <div className="indv_card_news__details">
            <h2>Its summer season in Mumbai</h2>
          </div>
          <button className="read__more__btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default News;
