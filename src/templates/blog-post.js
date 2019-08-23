import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"

function BlogPostTemplate({ data }) {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const content = post.html

  return (
    <Fragment>
      <Seo title={`${title} - Blog`} description={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Fragment>
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

console.log(pageQuery, "page query")
