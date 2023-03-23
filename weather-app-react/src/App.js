import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import "./index.css";

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

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="App">
      <div className="navbar__main">
        <p>Home</p>
        <p>Cities</p>
        <p>News</p>
      </div>

      {/* Main Content area begins here  */}
      {data.weather && (
        <Home weather={data.weather[0].main} humidity={data.main.humidity} wind={data.wind.speed} temp={data.main.temp} city={data.name}/>
      )}
    </div>
  );
}

export default App;
