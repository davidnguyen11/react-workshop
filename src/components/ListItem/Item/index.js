import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Item(props) {
  const { title, onClick, isActive } = props;
  let style = 'ListItem-item';
  if (isActive) {
    style = 'ListItem-item active';
  }

  return (
    <div className={style} onClick={onClick}>{title}</div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default Item;
