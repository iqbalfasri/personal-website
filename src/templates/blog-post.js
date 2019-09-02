import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
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

const BlogBackButton = styled(Link)`
    position: absolute;
    content: "";
    left: -30px;
    width: 50px;
    height: 50px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    font-weight: lighter;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color: #2e3338;
`


function BlogPostTemplate({ data }) {
  const post = data.markdownRemark
  const content = post.html
  const { title, date } = post.frontmatter
  const { author } = data.site.siteMetadata

  console.log(author)

  return (
    <Layout>
      <Seo title={`${title} - Blog`} description={title} />
      <div className="container">
        <BlogDetailWrapper>
          <BlogBackButton to="/blog">
            <FontAwesomeIcon icon={faArrowLeft} />
          </BlogBackButton>
          <BlogDetailTitle>{title}</BlogDetailTitle>
          <BlogDetailDate>
            {date} - {author}
          </BlogDetailDate>
          <BlogDetailContent>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </BlogDetailContent>
        </BlogDetailWrapper>
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
