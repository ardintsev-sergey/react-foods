import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='brown darken-2'>
      <div className='nav-wrapper'>
        <Link
          to='/'
          className='brand-logo'
        >
          React Foods
        </Link>
        <ul
          id='nav-mobile'
          className='right hide-on-med-and-down'
        >
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <a
              href='https://github.com/ardintsev-sergey/react-movies'
              target='_blank'
              rel='noreferrer'
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
