import React from "react";
import Data from "../../../data/produtos";
import '../Main/style.css';

export default function Main_Component(props) {
  function getDepartamentos() {
    return Data.departamentos.map((el) => {
      return (
        <section className="departamento-content" key={el.id}>
          <div className="departamento-nome-img">
            <h3> {el.nome}</h3>
            <a href="#">
            <img className="b1" src={el.src} alt={el.nome} />
          </a>
            </div>
         
        </section>
      );
    });
  }

  function getProdutos() {
    return Data["destaques"].map((el) => {
      return (
        <section className="Card-Content-main" key={el.id}>
          <a href="#">
            <img src={el.src} alt="imagem-produto" />
          </a>
          <div className="Nome">{el.nome}</div>
          <div className="Preco">Por R$ {el.preco}</div>
        </section>
      );
    });
  }

  return (

    <main className="Container">
      <section className="top-info"><h1>PRESS START</h1></section>
      {getProdutos()}
      <section className="bannerPromo">
        <a href="">
          <img className="bannerPromo1" src="assets/destaques/742.jpg" alt="" />
        </a>
        <a href="">
          <img className="bannerPromo2" src="assets/destaques/655.jpg" alt="" />
        </a>
      </section>

      <section className="Departamentos-container">
        {getDepartamentos()}
      </section>
    </main>
  );
}
