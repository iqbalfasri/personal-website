import React, { useState } from "react"
import { graphql } from "gatsby"
import Seo from "../components/SeoComponent"
import Layout from "../components/LayoutComponent"
import {
  BlogHeader,
  BlogHeaderTitle,
  BlogListPost,
  CustomLink,
  CustomLinkDate,
  CustomLinkText,
  SVGWrapper,
  WavesSVG,
} from "../components/BlogComponent"
import { LoadMore } from "../components/ButtonComponent"

function BlogPage({ data }) {
  const [limitContent, setLimitContent] = useState(6)
  const { edges } = data.allMarkdownRemark

  // Paginate content
  const paginateContent = edges.slice(0, limitContent)
  const visiblePagination = edges.length > limitContent ? true : false

  // Handle paginate content
  const handleLoadmore = e => {
    e.preventDefault()
    // Set limit content
    setLimitContent(limitContent + 3)
  }

  return (
    <Layout>
      <Seo title={"Blog"} />
      <BlogHeader>
        <div className="container">
          <BlogHeaderTitle className="pb-5">My Journal</BlogHeaderTitle>
          <p style={{ color: "white", opacity: 0.8 }}>
            <center>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </center>
          </p>
        </div>
        <SVGWrapper>
          <WavesSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f6f8fc"
              fillOpacity={1}
              d="M0,256L80,250.7C160,245,320,235,480,240C640,245,800,267,960,266.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </WavesSVG>
        </SVGWrapper>
      </BlogHeader>

      <BlogListPost>
        <div className="container">
          <div className="row">
            {paginateContent.map(post => {
              return (
                <div
                  className="mb-5 col-md-4 col-12"
                  id={post.node.id}
                  key={post.node.id}
                >
                  <CustomLink to={post.node.fields.slug}>
                    <CustomLinkText>
                      {post.node.frontmatter.title}
                    </CustomLinkText>
                    <p style={{ color: "#2e3338" }}>{post.node.excerpt}</p>
                    <CustomLinkDate>
                      {post.node.frontmatter.date}
                    </CustomLinkDate>
                  </CustomLink>
                </div>
              )
            })}
          </div>
        </div>
        <LoadMore isVisible={visiblePagination} onClick={handleLoadmore} text="Load more" />
      </BlogListPost>
    </Layout>
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
          excerpt(pruneLength: 80)
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
