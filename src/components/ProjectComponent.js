/**
 * Base component for Project Page
 */
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import PropTypes from "prop-types"

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
  visibility: ${props => (props.loading ? "hidden" : "visible")};

  &:hover {
    color: #fff;
  }
`
export const LoadMore = props => (
  <ProjectButtonLoadMore {...props}>
    <FontAwesomeIcon icon={faChevronDown} />
    {props.text}
  </ProjectButtonLoadMore>
)

/**
 *
 * @param {*} repositories
 * display each item repository
 */
export const DisplayCardRepos = ({ repositories, loading }) => {
  return (
    <div className="row">
      {repositories.map(data => {
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
    </div>
  )
}

DisplayCardRepos.defaultProps = {
  repositories: [],
}

DisplayCardRepos.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object),
}
