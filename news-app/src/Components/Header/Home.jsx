import axios from "axios";
import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);
  const [search, setsearch] = useState("");
  const getapi = async () => {
    const apiData = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-09-16&sortBy=publishedAt&apiKey=833ae0071f2345f085aa7a65dcd4e2d5"
    );
    setData(apiData.data.articles);
    console.log(apiData.data.articles);
  };

  useEffect(() => {
    getapi();
  }, []);

  return (
    <div>
      {data?.map((item) => (
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
              <h2 className="pub">{item.publishedAt}</h2>
            </div>
          </div>
        </div>
      ))}
      <a href="#" class="top">
        Back to Top &#8593;
      </a>
    </div>
  );
}

export default Home;

// ?.filter((val) => {
//   if (search == "") {
//     return val;
//   } else if (val.state.toLowerCase().startsWith(search.toLowerCase())) {
//     return val;
//   }
// })
