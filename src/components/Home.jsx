import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            aliquam natus cupiditate ratione ex cumque praesentium, temporibus
            atque nostrum est consectetur, modi molestiae ducimus id alias optio
            delectus eligendi voluptate.lorem lorem
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
