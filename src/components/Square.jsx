import React from 'react';

const Square = ({backgroundColor, width, backgroundImage, children, onClick, style = {}}) =><div>
  <div style={ {...style, ...{backgroundImage: backgroundImage?`url(${backgroundImage})`:'', backgroundColor, width, float: 'left'}}} onClick={onClick}>
    <div style={ {
      width: '100%',
      paddingBottom: '100%',
      height: 0,
      cursor: 'pointer'
      }}>{children}</div>
  </div>
</div>

export default Square;
