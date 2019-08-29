/**
 * Base component for Blog Page
 * and Detail Post blog.
 */
import styled from "styled-components"

/**
 * Component: Header blog
 */
const BlogHeader = styled.div`
  position: relative;
  height: 50vh;
  background: #6d94ca;
  background: -moz-linear-gradient(315deg, #6d94ca 0%, #a8c1ef 100%);
  background: -webkit-linear-gradient(315deg, #6d94ca 0%, #a8c1ef 100%);
  background: linear-gradient(315deg, #6d94ca 0%, #a8c1ef 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
`
const BlogHeaderTitle = styled.h1`
  font-family: "Playfair Display";
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 60px;
  line-height: 0;
`
const BlogHeaderSubTitle = styled.p`
  color: white;
  opacity: 0.8;
  font-weight: normal;
`

export { BlogHeader, BlogHeaderTitle, BlogHeaderSubTitle }
