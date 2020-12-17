import React from "react";
//Imagens
import Banner from "../img/Banner.jpg";
import we from "../img/we.jpg";
import smart from "../img/smart.jpg";
//Icons
import { BiDownArrowAlt } from "react-icons/bi";
//Components
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section className="Banner" style={{ position: "relative" }}>
        <div
          class="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h1
            style={{
              position: "absolute",
              color: "white",
              marginTop: "25rem",
              fontSize: "10rem",
            }}
          >
            Future now
          </h1>
          <BiDownArrowAlt
            style={{
              position: "absolute",
              color: "white",
              marginTop: "55rem",
              fontSize: "3rem",
            }}
          />
          <img
            src={Banner}
            alt=""
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <section
        className=" Quem somos?"
        style={{
          height: "59vh",
        }}
      >
        <div
          id="we"
          class="d-flex justify-content-evenly"
          style={{ padding: "10rem 15rem" }}
        >
          <div style={{ width: "50%", marginRight: "1rem" }}>
            <h1>Quem Somos?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum dolorum fugit necessitatibus veritatis ex rem quas
              temporibus dicta cupiditate hic itaque, ad assumenda beatae ab
              sequi sint facilis error ipsa!
            </p>
          </div>
          <div style={{ width: "50%", marginLeft: "1rem", height: "30vh" }}>
            <img
              src={we}
              alt=""
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section
        className="Smart City"
        style={{
          height: "66vh",
          background: "#D1D1D1",
          marginTop: "4rem",
        }}
      >
        <div
          id="smart"
          class="d-flex justify-content-evenly"
          style={{ padding: "10rem 15rem" }}
        >
          <div style={{ width: "50%", marginRight: "1rem" }}>
            <img
              src={smart}
              alt=""
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
          </div>
          <div style={{ width: "50%", marginLeft: "1rem" }}>
            <h1>Smart Cities</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum dolorum fugit necessitatibus veritatis ex rem quas
              temporibus dicta cupiditate hic itaque, ad assumenda beatae ab
              sequi sint facilis error ipsa!
            </p>
          </div>
        </div>
      </section>

      <section
        className="A nossa missão"
        style={{
          height: "60vh",
        }}
      >
        <div
          id="mission"
          class="d-flex justify-content-evenly"
          style={{ padding: "10rem 15rem" }}
        >
          <div style={{ width: "50%", marginRight: "1rem" }}>
            <h1>A nossa missão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum dolorum fugit necessitatibus veritatis ex rem quas
              temporibus dicta cupiditate hic itaque, ad assumenda beatae ab
              sequi sint facilis error ipsa!
            </p>
          </div>
          <div style={{ width: "50%", marginLeft: "1rem", height: "30vh" }}>
            <img
              src={we}
              alt=""
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
