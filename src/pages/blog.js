import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/SeoComponent"
import Layout from "../components/LayoutComponent"
import styled from "styled-components"

/**
 * Blog Header Styled Component
 */
const BlogHeader = styled.div`
  position: relative;
  height: 70vh;
  background: #6d94ca;
  background: -moz-linear-gradient(45deg, #6d94ca 0%, #a8c1ef 100%);
  background: -webkit-linear-gradient(45deg, #6d94ca 0%, #a8c1ef 100%);
  background: linear-gradient(45deg, #6d94ca 0%, #a8c1ef 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 5;
`
const BlogHeaderTitle = styled.h1`
  font-family: "Playfair Display";
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 60px;
  line-height: 0;
`
const BlogListPost = styled.div`
  padding: 80px 0;
`

/**
 * SVG Waves Styled Component
 */
const SVGWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  z-index: -1;
`
const WavesSVG = styled.svg`
  display: block;
  width: 100%;
`

/**
 * Link Styled Component
 */
const CustomLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 30px;
  max-height: 400px;
  min-height: 300px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 15px;
  text-decoration: none !important;
  box-shadow: 0px 10px 40px -10px rgba(0, 64, 128, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px) scale(1.01, 1.01);
  }

  &:focus {
    transform: translateY(0px) scale(1, 1);
  }
`
const CustonLinkText = styled.h5`
  font-size: 32px;
  color: #2e3338;
  font-weight: bold;
`
const CustomLinkDate = styled.p`
  font-size: 14px;
  opacity: 0.7;
  color: #717796;
`

function BlogPage({ data }) {
  const { edges } = data.allMarkdownRemark

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
            {edges.map(post => {
              console.log(post.node.excerpt.length)
              return (
                <div
                  className="mb-5 col-md-4 col-12"
                  id={post.node.id}
                  key={post.node.id}
                >
                  <CustomLink to={post.node.fields.slug}>
                    <CustonLinkText>
                      {post.node.frontmatter.title}
                    </CustonLinkText>
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
