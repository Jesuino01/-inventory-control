import React from "react";
import Header from '../../components/Header';
import TitleText from  '../../components/TitleText'
import  './Register.css';

export default function Register() {
  return (
    <>
      <Header/>
      <div className="container">
        <TitleText>Resgistrar Produtos</TitleText>
        <form className="form-cad">
          <input placeholder="Nome"/>
          <input placeholder="Estoque"/>
          <input placeholder="Quantidade Minimo"/>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
}

