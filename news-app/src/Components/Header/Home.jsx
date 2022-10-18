import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Home.css";
function Home(props) {
  const [data, setData] = useState([]);

  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  const getapi = async () => {
    const apiData = await axios.get(
      "https://newsapi.org/v2/everything?q=virat&apiKey=fb5542083cca4ac5957e9a26f8a6ec5f"
    );
    setData(apiData.data.articles);
    console.log(apiData.data.articles);
  };

  useEffect(() => {
    getapi();
  }, []);

  function likef() {
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
      if (dislikeactive) {
        setdislikeactive(false);
        setlike(dislike - 1);
        setdislike(dislike - 1);
      }
    }
  }
  function dislikef() {
    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike - 1);
    } else {
      setdislikeactive(true);
      setdislike(dislike + 1);
      if (likeactive) {
        setlikeactive(false);
        setdislike(dislike + 1);
        setlike(like - 1);
      }
    }
  }

  return (
    <div>
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
                <button onClick={likef}>Like {like} </button>
                <button onClick={dislikef}>Dislike {dislike}</button>
              </div>
            </div>
          </div>
        ))}
      <a href="#" className="top">
        Back to Top &#8593;
      </a>
    </div>
  );
}

export default Home;
