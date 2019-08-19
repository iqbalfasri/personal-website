import React from "react"
import { graphql, Link } from "gatsby"

// class BlogPage extends React.Component {
//   render() {
//     const { data } = this.props

//     console.log(this.props, "prop")

//     return <h1>BLog</h1>
//   }
// }

function BlogPage(props) {
  const { data } = props
  const { edges } = data.allMarkdownRemark
  console.log(edges, "Data from graphql")
  return (
    <div>
      <h1>My Journal</h1>

      {edges.map(post => {
        console.log(post, "List post")
        return (
          <div id={post.node.id} key={post.node.id}>
            <Link to={post.node.fields.slug}>
              <h5>{post.node.frontmatter.title}</h5>
            </Link>
          </div>
        )
      })}
    </div>
  )
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
          }
          id
        }
      }
    }
  }
`
