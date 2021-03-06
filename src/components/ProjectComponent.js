/**
 * Base component for Project Page
 */
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import PropTypes from "prop-types"

/**
 * Component: Header
 */
export const ProjectHeader = styled.div`
  position: relative;
  height: 70vh;
  background: #2e3338;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
  overflow: hidden;
  margin: 0 0 100px;

  h1 {
    text-align: center;
    color: white;
    font-weight: 800;
    font-size: 64px;
  }

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

/**
 * Component: Link
 */
const ProjectCardLink = styled.a`
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
const ProjectCardLinkText = styled.h5`
  font-size: 32px;
  color: #2e3338;
  font-weight: 700;
`
const ProjectCardLinkSubText = styled.p`
  color: rgb(46, 51, 56);
`
const ProjectCardLinkDateText = styled.p`
  font-size: 14px;
  opacity: 0.6;
  color: #2e3338;
`
/**
 * Component: Button
 */
const ProjectButtonLoadMore = styled.button`
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
  visibility: ${props => (props.loading === "true" ? "hidden" : "visible")};

  &:hover {
    color: #fff;
  }
`
export const LoadMore = props => (
  <ProjectButtonLoadMore {...props}>
    <FontAwesomeIcon icon={faChevronDown} />
    &nbsp;
    {props.text}
  </ProjectButtonLoadMore>
)

/** Text Loading */
const TextLoading = styled.p`
  font-size: 18px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 *
 * @param {*} repositories
 * display each item repository
 */
const DisplayCardRepos = ({ state }) => {
  const { repo, loading } = state
  return (
    <div className="row">
      {loading ? (
        <TextLoading>Loading...</TextLoading>
      ) : (
        <React.Fragment>
          {repo.map(data => {
            return (
              <div key={data.id} id={data.id} className="mb-5 col-md-4 col-12">
                <ProjectCardLink target="__blank" href={data.html_url}>
                  <ProjectCardLinkText>{data.name}</ProjectCardLinkText>
                  <ProjectCardLinkSubText>
                    {data.description}
                  </ProjectCardLinkSubText>
                  <ProjectCardLinkDateText>
                    {data.created_at}
                  </ProjectCardLinkDateText>
                </ProjectCardLink>
              </div>
            )
          })}
        </React.Fragment>
      )}
    </div>
  )
}

export default DisplayCardRepos

DisplayCardRepos.defaultProps = {
  state: {},
}

DisplayCardRepos.propTypes = {
  state: PropTypes.object,
}
