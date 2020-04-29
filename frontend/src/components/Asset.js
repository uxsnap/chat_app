import React from 'react';
import Icon from './Icon';

const Asset = ({src, isIcon = false, dummy = 'Dummy'}) => {
  return (
    <div className="asset">
     { isIcon
       ? <Icon name={src}/> 
       : (src.length ? <img src={src} /> : <div className="asset__dummy">{dummy[0].toUpperCase()}</div>)
     }
    </div>
  );
}

export default Asset;
