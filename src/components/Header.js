import React from 'react';
import arrow from '../images/arrow.svg';
import user from '../images/user.svg';
import menu from '../images/menu.svg';
import menurotate from '../images/menu-rotate.svg';
import logo from '../images/logo.svg';
import style from './header.module.css';

function showMenu(){
  document.getElementById('menu').style.height = 'auto';
  document.getElementById('menuIcon').src = menurotate;
}

function hideMenu(){
  document.getElementById('menu').style.height = '0px';
  document.getElementById('menuIcon').src = menu;
}

function showMenuUser(){
  document.getElementById('menuUser').style.height = 'auto';
}

function hideMenuUser(){
  document.getElementById('menuUser').style.height = '0px';
}

class Header extends React.Component {
  render() {
    return (
      <header className="pt16">
        <nav className="flex justify-between">
          <div className="flex items-center justify-center pl32 pointer pb16" onMouseEnter={showMenu} onMouseLeave={hideMenu} tabIndex="1" onFocus={showMenu} onBlur={hideMenu}>
            <img src={menu} alt="menu" className={`pa10 ${style.menuIcon}`} id="menuIcon"/>
            <span>Menu</span>
            <div id='menu' className={`absolute br3 ${style.menu}`}>
              <div className={`flex flex-column`}>
                <div>Home</div>
                <div>Produtos</div>
                <div>Cadastrar parceiro</div>
              </div>
            </div>
          </div>
          <div className="pointer pb16"><img src={logo} alt="Compre Certo Estoque" tabIndex="2"/></div>
          <div className="flex items-center justify-center pr32 pointer pb16" tabIndex="3" onMouseEnter={showMenuUser} onMouseLeave={hideMenuUser} onFocus={showMenuUser} onBlur={hideMenuUser}>
            <img src={user} alt="user" className="pa10"/>
            <span>Usuário</span>
            <img src={arrow} alt="\/" className="pa10"/>
            <div id='menuUser' className={`absolute br3 ${style.menuUser}`}>
              <div className={`flex flex-column`}>
                <div>Perfil</div>
                <div>Avisos</div>
                <div>Configurações</div>
                <div>Sair</div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
