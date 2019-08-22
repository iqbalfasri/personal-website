import React from "react"
import { Link, graphql } from "gatsby"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    console.log(post, "POST ANJING")
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />
  }
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