import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Panel(props) {
  const { position } = props;

  let style = 'Panel-left';
  switch(position) {
    case 'left':
      style = 'Panel-left';
      break;
    case 'right':
      style = 'Panel-right';
      break;
    default:
      break;
  }

  return <div className={style}>{props.children}</div>;
}

Panel.propTypes = {
  position: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;