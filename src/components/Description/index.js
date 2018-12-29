import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

function Description(props) {
  return <p className="Description">{props.children}</p>;
}

Description.propTypes = {
  children: PropTypes.node,
};

export default Description;