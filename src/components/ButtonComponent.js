import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

/**
 * Pagination button
 */
const LoadMoreButtonStyled = styled.button`
  position: relative;
  margin: auto auto 150px;
  padding: 10px 40px;
  display: block;
  color: #fff;
  background: #5c6ac4;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  box-shadow: 0px 10px 4px -10px rgba(0, 64, 128, 0.2);
  border-radius: 10px;
  outline: none;
`
export const LoadMore = props => {
  return <LoadMoreButtonStyled {...props}>{props.text}</LoadMoreButtonStyled>
}

LoadMore.defaultProps = {
  text: "",
}

LoadMore.propTypes = {
  text: PropTypes.string,
}