import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Title(props) {
  return <h1 className="Title">{props.children}</h1>;
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;