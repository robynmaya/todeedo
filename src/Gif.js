import React from 'react';

const Gif = ({image}) => {
  return (
    <img className="Gif" alt="gif to respond to your filter" src={image}></img>
  );
};

export default Gif;