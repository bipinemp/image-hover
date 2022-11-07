import React, { useState } from "react";

function Home() {
  const [open, setOpen] = useState("logo");
  const offHover = () => {
    setOpen("logo");
  };
  return (
    <div className="home">
      <div className="links">
        <p onMouseOver={() => setOpen("roman")} onMouseOut={offHover}>
          Roman Reigns
        </p>
        <p onMouseOver={() => setOpen("john")} onMouseOut={offHover}>
          John Cena
        </p>
        <p onMouseOver={() => setOpen("undertaker")} onMouseOut={offHover}>
          Undertaker
        </p>
        <p onMouseOver={() => setOpen("rock")} onMouseOut={offHover}>
          Rock
        </p>
      </div>
      <div className="images">
        <img
          alt="wrestlers_picture"
          src={process.env.PUBLIC_URL + `/images/${open}.png`}
        />
      </div>
    </div>
  );
}

export default Home;
