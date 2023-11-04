import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function HeaderMain() {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <h1 style={{ marginLeft: '20px' }}>Cadastro de Posts</h1>
        </div>
        <div className="btn-newPost">
          <Link to='/posts'>
            <button style={{ marginRight: '20px' }}>Adicionar novo Post</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
