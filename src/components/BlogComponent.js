/**
 * Base component for Blog Page
 * and Detail Post blog.
 */
import { Link } from "gatsby"
import styled from "styled-components"

/**
 * Component: Header blog
 */
const BlogHeader = styled.div`
  position: relative;
  height: 70vh;
  /* background: #4481eb; */
  background: #5c6ac4;
  /* background: #6d94ca;
  background: -moz-linear-gradient(45deg, #6d94ca 0%, #a8c1ef 100%);
  background: -webkit-linear-gradient(45deg, #6d94ca 0%, #a8c1ef 100%);
  background: linear-gradient(45deg, #6d94ca 0%, #a8c1ef 100%); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  overflow: hidden;

  &::after {
    position: absolute;
    content: "";
    width: 400px;
    height: 400px;
    background-color: transparent;
    border: 65px solid #ffbf7f;
    transform: rotate(40deg);
    z-index: -5;
    top: -120px;
    right: -150px;
    border-radius: 100%;
  }

  &::before {
    position: absolute;
    content: "";
    width: 120px;
    height: 120px;
    background-color: transparent;
    border: 20px solid #56cad8;
    transform: rotate(40deg);
    z-index: 5;
    bottom: 30px;
    left: 0;
  }
`
const BlogHeaderTitle = styled.h1`
  font-family: "Playfair Display";
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 64px;
  line-height: 0;
`
const BlogListPost = styled.div`
  position: relative;
  padding: 80px 0;
  overflow: hidden;

  &::after {
    position: absolute;
    content: "";
    width: 400px;
    height: 400px;
    background-color: transparent;
    border: 65px solid #ff7470;
    transform: rotate(40deg);
    z-index: -1;
    right: -150px;
    bottom: -20px;
    border-radius: 100%;
  }
`

/**
 * SVG Waves Styled Component
 */
const SVGWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: -1;
`
const WavesSVG = styled.svg`
  display: block;
  width: 100%;
`

/**
 * Link Styled Component
 */
const CustomLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 30px;
  max-height: 400px;
  min-height: 310px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 15px;
  text-decoration: none !important;
  box-shadow: 0px 10px 40px -10px rgba(0, 64, 128, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  &:focus {
    transform: translateY(0px) scale(1, 1);
  }
`
const CustomLinkText = styled.h5`
  font-size: 32px;
  color: #2e3338;
  font-weight: 700;
`
const CustomLinkDate = styled.p`
  font-size: 14px;
  opacity: 0.6;
  color: #2e3338;
`

export {
  BlogHeader,
  BlogHeaderTitle,
  BlogListPost,
  SVGWrapper,
  WavesSVG,
  CustomLink,
  CustomLinkText,
  CustomLinkDate,
}
