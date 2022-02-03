import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Audio from "../../Audio-Produtos/Head-Template";
import Eletronicos from "../../Eletronicos-produtos/Eletronicos-Template";
import Perifericos from "../../Lancamentos-Produtos/Lancamentos-Template";
import PcGamer from "../../PcGamer-produtos/Pc-Gamer";
import Teclado from "../../Teclados-Produtos/Teclados-Template";
import Main from "../Main/Main-component";
import "./style.css";

export default function Header_component(props) {
  return (
    <BrowserRouter>
      <header className="header-container">
        <Link className="logo" to="/">
          <img src="assets/logo/Sem título.png" alt="logo" />
        </Link>

        <div className="input-cont">
          <input type="text" placeholder="Busque aqui" />
          <button>Buscar</button>
        </div>

        <div className="login-cadastro-cont">
          Faça
          <strong>
            <a href="#"> Login </a>
          </strong>
          ou crie seu
          <strong>
            <a href="#"> Cadastro</a>
          </strong>
        </div>
      </header>

      <header className="header-container-mobile">

        <div className="logo-input-content">
          
          <Link className="logo" to="/">
            <img src="assets/logo/Sem título.png" alt="logo" />
          </Link>

          <div className="input-cont">
            <input type="text" placeholder="Busque aqui" />
          </div>
        </div>

        <div className="login-cadastro-cont">
          Faça
          <strong>
            <a href="#"> Login </a>
          </strong>
          ou crie seu
          <strong>
            <a href="#"> Cadastro</a>
          </strong>
        </div>
      </header>

      <nav className="navegacao">
        <ul className="navbar-item-list">
          <li>
            <Link className="link" to="/">
              DESTAQUES
            </Link>
          </li>

          <li>
            <Link className="link" to="/eletronicos">
              ELETRÔNICOS
            </Link>
          </li>

          <li>
            <Link className="link" to="/pcgamer">
              PC GAMER
            </Link>
          </li>

          <li>
            <Link className="link" to="/audio">
              ÁUDIO
            </Link>
          </li>

          <li>
            <Link className="link" to="/teclados">
              TECLADOS
            </Link>
          </li>

          <li>
            <Link className="link" to="/perifericos">
              LANÇAMENTOS
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/teclados" element={<Teclado />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/perifericos" element={<Perifericos />} />
        <Route path="/pcgamer" element={<PcGamer />} />
        <Route path="/eletronicos" element={<Eletronicos />} />
      </Routes>
    </BrowserRouter>
  );
}
