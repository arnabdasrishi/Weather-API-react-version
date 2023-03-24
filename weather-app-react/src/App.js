import axios from "axios";
import { useEffect, useState } from "react";
import Cities from "./components/Cities";
import Footer from "./components/Footer";
import GlobeSpotter from "./components/GlobeSpotter";
import Home from "./components/Home";
import News from "./components/News";
import "./index.css";

import {RiSearchLine} from "react-icons/ri"

function App() {
  const api_key = "02d239601251d949579a12127209ff8e";
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&APPID=${api_key}&units=metric`
        )
        .then((response) => {
          setData(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // Applying a debounce function for the delayed effect in search
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  const debouncedSearchData = debounce(searchData, 3000);

  function searchData(e) {
    searchWeather(e.target.value)
  }
  function searchWeather(search){
    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${api_key}&units=metric`
        )
        .then((response) => {
          setData(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      {/* Navar portion */}
      <div className="navbar__main">
        <p>Home</p>
        <p>Cities</p>
        <p>News</p>
      </div>

      {/* Main Content area begins here  */}
      {data.weather && (
        <Home
          weather={data.weather[0].main}
          humidity={data.main.humidity}
          wind={data.wind.speed}
          temp={data.main.temp}
          city={data.name}
          img={data.weather[0].icon}
        />
      )}

      {/* Cities section JSX hereby */}
      <Cities />
      {/* Input section below city combines */}
      <div className="input__section_main">
        <input type="text" placeholder="Search City" id="card__items__search" onChange={debouncedSearchData}/>
        <button className="search__btn__items__card">
          <RiSearchLine size={30} />
        </button>
      </div>

      {/* Globe Place spot integration */}
      <GlobeSpotter />
      {/* News section of the website begins here */}
      <News />
      {/* Footer ***end of the website*** component */}
      <Footer />
    </div>
  );
}

export default App;
