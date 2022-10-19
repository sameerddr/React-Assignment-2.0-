import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css";
import Like from "./Like";
import Remove from "./Remove";
function Home(props) {
  const [data, setData] = useState([]);

  const getapi = async () => {
    const apiData = await axios.get(
      "https://newsapi.org/v2/everything?q=world&apiKey=fb5542083cca4ac5957e9a26f8a6ec5f"
    );
    setData(apiData.data.articles);
    console.log(apiData.data.articles);
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <>
      {data
        ?.filter((val) => {
          if (props.part == "") {
            return val;
          } else if (
            val.title.toLowerCase().startsWith(props.part.toLowerCase())
          ) {
            return val;
          }
        })
        .map((item) => (
          <div className="newsbox" key={item.url}>
            <div className="box">
              <div className="boxes">
                <div className="p1">
                  <img
                    src={item.urlToImage}
                    alt="No Image For this Post"
                    className="postimg"
                  />
                  <h3 className="title">{item.title}</h3>
                </div>
                <h4 className="author"> Author :: {item.author}</h4>
                <p className="des">
                  <h4>Description :: </h4>
                  {item.description}
                </p>
                <button className="url">
                  <a href={item.url}>Read More</a>
                </button>
                <p className="pub">
                  <h5>Publishing Time ::</h5> {item.publishedAt}
                </p>
                <Like />
              </div>
              <Remove />
            </div>
          </div>
        ))}
      <a href="#" className="top">
        Back to Top &#8593;
      </a>
    </>
  );
}

export default Home;
