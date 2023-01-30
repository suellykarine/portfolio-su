import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FcCellPhone } from "react-icons/fc";
import { MdAlternateEmail } from "react-icons/md";
import ameCertificado from "../assets/fotos/ame.jpg";
import certificadoFront from "../assets/fotos/certificado.jpg";
import devMulher from "../assets/fotos/devmulher.png";
import fotoSu from "../assets/fotos/foto.jpg";
import fullstack from "../assets/fotos/fullstack.jpg";
import Cards from "../componentes/Cards";
import "./style-novo.css";

const Home = () => {
  return (
    <div>
      <nav class="container">
        <a class="logo" href="#">
          Suélly<span>Dev</span>.
        </a>

        <div class="menu">
          <ul class="grid">
            <li>
              <a class="title" href="#home">
                Início
              </a>
            </li>
            <li>
              <a class="title" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a class="title" href="#tec">
                Tecnologias
              </a>
            </li>
            <li>
              <a class="title" href="#projetos">
                Projetos
              </a>
            </li>
            <li>
              <a class="title" href="#qualificacao">
                Qualificação
              </a>
            </li>

            <li>
              <a class="title" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div class="toggle icon-menu"></div>
        <div class="toggle icon-close"></div>
      </nav>

      <main>
        <section class="section" id="home">
          <div class="container grid">
            <div class="image">
              <img className="inicio" src={devMulher} alt="mulher-devr" />
            </div>
            <div class="text">
              <h2 class="title">Olá eu sou Suélly Araujo</h2>
              <p>Desenvolvedora Fullstack</p>
              <p>Entusiasta de tecnologia e apaixonada por aprender!</p>
              <a class="button" href="#about">
                Me conheça
              </a>
            </div>
          </div>
        </section>

        <div class="divider-1"></div>

        <section class="section" id="about">
          <div class="container grid">
            <div class="image">
              <img src={fotoSu} alt="eu" />
            </div>
            <div class="text">
              <h2 class="title titulo-teste">Um pouco sobre mim</h2>

              <p>
                Aprendi com o tempo que mudanças são bem-vindas e começos são
                necesssários! Sou turismóloga de formação e pós-graduada em
                educação. Após perceber que podia chegar mais longe, me encantei
                pela área de tecnologia e decidi fazer a transição de carreira
                para adquirir mais conhecimentos e experiências.
              </p>
              <br />
              <p>
                Com a formação Fullstack minha meta é continuar a me aprofundar
                e contribuir com os meus conhecimentos além de alcançar o
                sucesso profissional no mundo da tecnologia.
              </p>
              <br />
              <p>
                Tenho como objetivo agregar todas as técnicas que desenvolvi ao
                longo dos anos no mercado com as que adquiri recentemente. Aqui
                trago alguns dos projetos que contribuiram no meu aprendizado e
                você pode conferir.
              </p>
            </div>
          </div>
        </section>

        <div class="divider-2"></div>

        <section class="section" id="tec">
          <div class="container grid">
            <header>
              <h2 class="title ajuste  titulo-teste">
                Tecnologias e Ferramentas
              </h2>
              <div className="ajuste3">
                <div className="card card-ajuste">
                  <p class="subtitle">
                    <strong>Front-End</strong>

                    <li>ReactJS</li>
                    <li>JavaScript</li>
                    <li>HTML5 </li>
                    <li>CSS3</li>
                    <li>Git</li>
                  </p>
                </div>
                <div className="card card-ajuste">
                  <p class="subtitle">
                    <strong>Back-End</strong>
                    <li>NodeJs</li>
                    <li>PostgreSql</li>
                    <li>MySql</li>
                    <li>TypeScript</li>
                    <li>Docker</li>
                    <li>Python</li>
                    <li>Django</li>
                  </p>
                </div>
              </div>
            </header>
          </div>
        </section>
        <div class="divider-1 div-linha "></div>
        <h2 class="title ajuste2 titulo-teste">Projetos</h2>
        <section class="" id="projetos">
          <Cards />
        </section>

        <div class="divider-1"></div>

        <section class="section" id="qualificacao">
          <div class="container">
            <header>
              <h2 class="title ajuste4 titulo-teste">Qualificação</h2>
            </header>
            <div class="testimonials swiper-container">
              <div class="swiper-wrapper">
                <div class="testimonial swiper-slide certificate">
                  <div className="images">
                    <img
                      className="img-certificate"
                      src={fullstack}
                      alt="certificado"
                    />
                    <img
                      className="img-certificate"
                      src={certificadoFront}
                      alt="certificado"
                    />

                    <img
                      className="img-certificate"
                      src={ameCertificado}
                      alt="certificado"
                    />
                  </div>
                </div>
              </div>

              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <div class="divider-2"></div>

        <section class="section " id="contact">
          <div class="container grid">
            <div class="text">
              <h2 class="title ajuste5 titulo-teste">Entre em contato!</h2>

              <a
                href="https://api.whatsapp.com/send?phone=+5581999568300&text=Olá! Venho por meio do seu portfólio na internet, gostaria de conhecer melhor seus serviços!"
                class="button"
                target="_blank"
                rel="noreferrer"
              >
                <i class="icon-whatsapp"></i>Fale comigo
              </a>
            </div>

            <div class="links">
              <ul class="grid">
                <li>
                  <i class="icon-phone">
                    <FcCellPhone />
                  </i>{" "}
                  +55 81 9 9956-8300
                </li>

                <li>
                  <i class="icon-mail">
                    <MdAlternateEmail />
                  </i>{" "}
                  suellykarine@yahoo.com.br
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div class="divider-1"></div>
      </main>

      <footer class="section">
        <div class="container grid">
          <div class="brand">
            <a class="logo logo-alt" href="#home">
              Suélly<span>Dev</span>.
            </a>
            <p>©2022 SuellyAraujo.</p>
            <p>Todos os direitos reservados.</p>
          </div>

          <div class="social grid">
            <a
              href="https://github.com/suellykarine"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiFillGithub size={50} /> <i class="icon-instagram"></i>
            </a>
            <a
              href=" https://www.linkedin.com/in/suellyaraujo/"
              target="_blank"
            >
              <AiFillLinkedin size={50} />

              <i class="icon-facebook"></i>
            </a>
          </div>
        </div>
      </footer>

      <a href="#home" class="back-to-top">
        {" "}
        <i class="icon-arrow-up"></i>
      </a>
    </div>
  );
};

export default Home;
