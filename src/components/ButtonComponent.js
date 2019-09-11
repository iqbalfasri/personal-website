import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

/**
 * Pagination button
 */
const LoadMoreButtonStyled = styled.button`
  position: relative;
  margin: auto auto 150px;
  padding: 10px 40px;
  display: block;
  color: #fff;
  background: #2e3338;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 25px;
  outline: none;
  letter-spacing: 0.5px;
  border: none;
  transition: 0.3s transform ease-in-out;

  /* Remove default outline color when button click */
  &:focus {
    outline: none;
    border: none;
  }

  /* Add hover effect */
  &:hover {
    transform: translateY(-1.5px);
  }
`
export const LoadMore = props => {
  return (
    <LoadMoreButtonStyled {...props}>
      <FontAwesomeIcon icon={faAngleDown} />
      &nbsp;&nbsp;{props.text}
    </LoadMoreButtonStyled>
  )
}

LoadMore.defaultProps = {
  text: "",
}

LoadMore.propTypes = {
  text: PropTypes.string,
}
