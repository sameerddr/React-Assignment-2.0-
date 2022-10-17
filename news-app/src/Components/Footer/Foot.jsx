import React, { useState, useEffect } from "react";
import "./Foot.css";
function Foot() {
  //   const current = new Date().toLocaleString();
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => setTime(Date().toLocaleString()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="foot">
        <p className="rights">
          Copyrights are reserved @sameer.writes.70@gmail.com
        </p>
        <div className="date">
          <h4>Current Date & Time is {time}</h4>
        </div>
      </div>
    </>
  );
}

export default Foot;
