import { AiFillGithub } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import "../../pages/style-novo.css";
import Projetos from "../../projetos";
import "./styles.css";
const Cards = () => {
  return (
    <div class="cards grid">
      {Projetos.map((projeto, index) => {
        return (
          <div class="card" key={index}>
            <h2 className="title"> {projeto.nome}</h2>
            <p> {projeto.descricao} </p>
            <a className="a-cards1" href={projeto.github} target="_blank">
              Repositório <AiFillGithub size={20} />
            </a>
            <a className="a-cards2" href={projeto.link} target="_blank">
              Link <BsLink size={20} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
