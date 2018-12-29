import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail(props) {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Thumbnail;