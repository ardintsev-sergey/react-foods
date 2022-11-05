import React, { useState } from 'react';

export const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          id='search'
          placeholder='Search'
          onKeyDown={handleKeyDown}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className='btn blue lighten-2 search-btn'
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};
