import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css";
import Like from "./Like";
import Comment from "./Comment";
import Loader from "./Loader";
function Home(props) {
  const [data, setData] = useState([]);
  const [loader, setloader] = useState(false);

  const getapi = async () => {
    const apiData = await axios.get(
      "https://newsapi.org/v2/everything?q=world&apiKey=fb5542083cca4ac5957e9a26f8a6ec5f"
    );
    setData(apiData.data.articles);
    setloader(true);
    console.log(apiData.data.articles);
  };

  useEffect(() => {
    getapi();
  }, []);

  const handleremove = (url) => {
    const removedata = data.filter((data) => data.url !== url);
    setData(removedata);
  };

  return (
    <>
      {loader ? (
        <>
          {data
            .filter((val) => {
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
                    <button
                      onClick={() => handleremove(item.url)}
                      className="remove">
                      Remove
                    </button>
                    <Like />
                    <Comment />
                  </div>
                </div>
              </div>
            ))}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Home;
