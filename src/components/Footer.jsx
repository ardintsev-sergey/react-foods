import React from 'react';

function Footer() {
  return (
    <footer className='page-footer brown'>
      <div className='footer-copyright brown darken-2'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/ardintsev-sergey/react-movies'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
