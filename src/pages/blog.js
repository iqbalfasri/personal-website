import React from "react"
import { graphql } from "gatsby"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props

    console.log(data, "prop")

    return <h1>BLog</h1>
  }
}
export default BlogPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

