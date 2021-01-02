import React from "react";
//Imagens
import Banner from "../img/Banner.jpg";
import we from "../img/we.jpg";
import smart from "../img/smart.jpg";
import logoBranco from "../img/logo_ranco.png";
import logoPretoCores from "../img/logoPretoCores.svg";
//Icons
import { BiDownArrowAlt } from "react-icons/bi";
//Components
import Footer from "../components/Footer";
//Styling
import "../Home.css";

const Home = () => {
  return (
    <div>
      <section className="Banner" style={{ position: "relative" }}>
        <div
          class="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <img
            src={logoBranco}
            alt=""
            style={{
              position: "absolute",
              color: "white",
              textDecoration: "none",
              marginLeft: "0.5rem",
              top: "0",
              left: "0",
              height: "5rem",
              margin: "2rem",
            }}
          />

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
          <a
            style={{
              position: "absolute",
              color: "white",
              marginTop: "55rem",
              fontSize: "3rem",
            }}
            href="#we"
            alt=""
          >
            <BiDownArrowAlt />
          </a>
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
          style={{ padding: "10rem 20rem" }}
        >
          <div
            style={{ width: "50%", marginRight: "3rem", textAlign: "justify" }}
          >
            <h1>Quem Somos?</h1>
            <p>
              A Flow Technologies é uma equipa de 2 makers nova e ambiciosa que
              quer deixar a sua marca no mundo através das tecnologias.
              <br />
              Somos uma equipa curiosa, viemos de caminhos diferentes, com o
              mesmo foco para tornar a nossa sociedade mais conectada e segura.
            </p>
          </div>
          <div style={{ width: "50%", marginLeft: "3rem", height: "30vh" }}>
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
          style={{ padding: "10rem 20rem" }}
        >
          <div style={{ width: "50%", marginRight: "3rem" }}>
            <img
              src={smart}
              alt=""
              style={{ width: "100%", height: "40vh", objectFit: "cover" }}
            />
          </div>
          <div
            style={{ width: "50%", marginLeft: "3rem", textAlign: "justify" }}
          >
            <h1>Smart Cities</h1>
            <p>
              Uma Smart City usa tecnologia digital para conectar , proteger e
              auxiliar a vida das pessoas. Sensores IOT, cameras de video
              vigilancia, redes sociais e outras aspectos agem com um sistema
              unico, fornecendo à cidade e aos seus habitantes uma resposta
              constante, para que se mantenham informados.
              <br /> Alguns temas abordados:
              <br />
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; - Energia
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; - Tecnologia e Inovação
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; - Sustentabilidade
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; - Planeamento Urbano
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; - Mobilidade
              <br /> &nbsp;&nbsp; &nbsp; &nbsp; - Segurança
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
          style={{ padding: "10rem 20rem", textAlign: "justify" }}
        >
          <div style={{ width: "50%", marginRight: "3rem" }}>
            <h1>A nossa visão</h1>
            <p>
              Criar soluções inovadoras que melhorem o estilo de vida de todos é
              a nossa visão! Acreditamos que o futuro tecnológico tem de ser
              desenvolvido tendo em conta as necessidades dos mais diversos
              serviços que constituem uma cidade para o bem estar dos
              habitantes. Buscamos o progresso e acessibilidade para todas as
              pessoas, com isto em mente, olhamos para o futuro com positividade
              e esperança de que a segurança deva ser algo garantido e sem
              receios de utilizar novas tecnologias.
            </p>
          </div>
          <div style={{ width: "50%", marginLeft: "3rem", height: "30vh" }}>
            <img
              id="logo"
              src={logoPretoCores}
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
