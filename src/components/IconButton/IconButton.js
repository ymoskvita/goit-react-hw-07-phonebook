import React from "react";
import PropTypes from 'prop-types';
import { IconBtn } from '../Phonebook.styled';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <IconBtn type="button" onClick={onClick} {...allyProps}>
    {children}
  </IconBtn>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
