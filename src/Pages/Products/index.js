import React from "react";
import './Products.css';
import ListProducts from "../../components/ListProducts";
import TitleText from '../../components/TitleText';

export default function Products() {
  return (
    <section className="container">
      <TitleText>Produtos</TitleText>
      <ListProducts />
    </section>
  );
}

