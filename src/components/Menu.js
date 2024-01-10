import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='project-section-center'>
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
