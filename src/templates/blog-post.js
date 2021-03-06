import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Seo from "../components/SeoComponent"
import Layout from "../components/LayoutComponent"

const BlogDetailWrapper = styled.div`
  position: relative;
  background-color: white;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0px 10px 40px -10px rgba(0, 64, 128, 0.2);
  padding: 70px;
  box-sizing: border-box;

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
    opacity: 0.2;
  }

  &::before {
    position: absolute;
    content: "";
    width: 400px;
    height: 400px;
    background-color: transparent;
    border: 65px solid #ff7470;
    transform: rotate(40deg);
    z-index: -1;
    left: -150px;
    bottom: -120px;
    border-radius: 100%;
    opacity: 0.2;
  }
`

const BlogDetailTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  text-align: center;
`

const BlogDetailDate = styled.p`
  text-align: center;
  font-size: 14px;
`

const BlogDetailContent = styled.div`
  padding: 40px 0;
  color: #2e3338;

  p {
    color: #2e3338;
    font-size: 18px;
    font-weight: normal;
  }
`

const BlogDetailBackButton = styled(Link)`
  position: relative;
  margin: auto auto 150px;
  display: block;
  color: #fff;
  background: #2e3338;
  max-width: 60px;
  min-height: 60px;
  font-size: 22px;
  text-align: center;
  line-height: 60px;
  box-shadow: 0px 10px 40px -10px rgba(0, 64, 128, 0.2);
  border-radius: 100%;

  &:hover {
    color: #fff;
  }
`

function BlogPostTemplate({ data }) {
  const post = data.markdownRemark
  const content = post.html
  const { title, date } = post.frontmatter
  const { author } = data.site.siteMetadata

  return (
    <Layout>
      <Seo title={`${title} - Blog`} description={title} />
      <div className="container">
        <BlogDetailWrapper>
          <BlogDetailTitle>{title}</BlogDetailTitle>
          <BlogDetailDate>
            {date} - {author}
          </BlogDetailDate>
          <BlogDetailContent>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </BlogDetailContent>
        </BlogDetailWrapper>
        <BlogDetailBackButton to="/blog">
          <FontAwesomeIcon icon={faArrowLeft} />
        </BlogDetailBackButton>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
