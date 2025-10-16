import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <>
        <header>
          <h3>Registro de Persona</h3>
          <nav>
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            <ul className={menuOpen ? 'menu open' : 'menu'}>
              <li><Link className='enlace' to={'/'}>Inicio</Link></li>
              <li><Link className='enlace' to={'/agregar'}>Agregar Persona</Link></li>
              <li><Link className='enlace' to={'/contacto'}>Contactos</Link></li>
            </ul>
          </nav>
        </header>
      </>
  )
}

export default Header;
