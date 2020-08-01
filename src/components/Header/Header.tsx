import React from 'react';
import './style.scss';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className='header__logo'>
          <div className='logo'>SONGBIRD</div>
          <div className='score'>Score: </div>
        </div>
        <ul className='header__list-questions'>
          <li>Разминка</li>
          <li>Воробьиные</li>
          <li>Лесные птицы</li>
          <li>Певчие птицы</li>
          <li>Хищные птицы</li>
          <li>Морские птицы</li>
        </ul>
      </header>
    </>
  );
}

export default Header;