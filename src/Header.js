import React from 'react';

const Header = ({count}) => (
  <h1 className='Header'>
    You have {count} { count === 1 ? "thing" : "things" } to do!
  </h1>
);

export default Header;