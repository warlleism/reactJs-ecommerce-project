import React from "react";
import Data from "../../data/produtos";


export default function Template_HeadSet(props) {
  function getProdutos() {
    return Data["produtos-lancamentos"].map((el) => {
      return (
        <section className="Card-Content" key={el.id}>
          <a href="#">
            <img src={el.src} alt="imagem" />
          </a>
          <div className="Nome">{el.nome}</div>
          <div className="Preco">Por R$ {el.preco}</div>
        </section>
      );
    });
  }

  return (
    <main className="Container">
      <section className="top-info">
        <h1>PRESS START</h1>
      </section>
      {getProdutos()}
    </main>
  );
}
