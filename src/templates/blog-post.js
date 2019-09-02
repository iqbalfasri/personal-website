import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/SeoComponent"
import Layout from "../components/LayoutComponent"
import styled from "styled-components"

const BlogDetailWrapper = styled.div`
  position: relative;
  background-color: white;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0px 10px 40px -10px rgba(0, 64, 128, 0.2);
  padding: 70px;
  box-sizing: border-box;


  &:before {
    position: absolute;
    content: "";
    left: 0;
    width: 50px;
    height: 50px;
    background: salmon;
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
