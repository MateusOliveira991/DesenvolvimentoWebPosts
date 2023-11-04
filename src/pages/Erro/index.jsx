import React from 'react';
import Header from '../../components/Header';
import './style.css';

export default function Erro() {
  return (
    <div>
      <Header />
      <div class="error-message">Ops! Algo deu errado.</div>
      <div class="error-code">404</div>
      <p className='paragrafo-erro'>A página que você está procurando não foi encontrada.</p>
      <a class="back-home" href="/">Voltar para a página inicial</a>
    </div>
  );
}
