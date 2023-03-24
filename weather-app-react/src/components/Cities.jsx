import React from "react";
import "../index.css";
import {RiSearchLine} from "react-icons/ri"

const Cities = () => {
  return (
    <div className="cities__main">
      <h1>Cities</h1>

      <div className="cards__grid">
        <div className="indv__card__items">
          <img src="https://i.ibb.co/f4XMhzs/1096121.jpg" alt="delhi" />

          <div className="indv_card_deets">
            <div className="indv__card__temp">
              <h1>29°</h1>
            </div>
            <div className="indv__card__details">
              <h2>Delhi</h2>
              <p>9/03/23</p>
            </div>
          </div>
        </div>

        <div className="indv__card__items">
          <img
            src="https://i.ibb.co/MN4jJhD/beautiful-cloudy-sky-free-photo.jpg"
            alt="delhi"
          />

          <div className="indv_card_deets">
            <div className="indv__card__temp">
              <h1>29°</h1>
            </div>
            <div className="indv__card__details">
              <h2>Chennai</h2>
              <p>9/03/23</p>
            </div>
          </div>
        </div>

        <div className="indv__card__items">
          <img
            src="https://i.ibb.co/y6KQ229/sky-1191655-960-720.jpg"
            alt="delhi"
          />

          <div className="indv_card_deets">
            <div className="indv__card__temp">
              <h1>40°</h1>
            </div>
            <div className="indv__card__details">
              <h2>Jaipur</h2>
              <p>9/03/23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
