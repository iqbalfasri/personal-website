import React, { useEffect } from "react"
import Splitting from "splitting"

import Layout from "../components/LayoutComponent"
import SEO from "../components/SeoComponent"

import "../assets/css/pages/index.css"

const CircleText = ({text}) => (
  <div class="circle-me" data-splitting>{text}</div>
)

const IndexPage = () => {
  useEffect(() => {
    Splitting({
      by: "chars",
      whitespace: true
    });

    return () => {
      Splitting({
        by: "chars",
        whitespace: true
      });
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <div className="main-page">
        <div className="container">
        <CircleText text="Welcome to my website" />
          <div className="text--container">
            <h1>My name is <br />Muhammad Iqbal Fasri</h1>
            <h1 className="my-5">i'm a <br />Frontend Developer</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
