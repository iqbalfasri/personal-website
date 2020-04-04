import React, { useEffect } from "react"
// import Splitting from "splitting"

import "../assets/css/pages/404.css"
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"

import SEO from "../components/SeoComponent"
import Layout from "../components/LayoutComponent"
import { Link } from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    Splitting()
    return () => {
      Splitting()
    }
  }, [])

  return (
    <Layout>
      <SEO title="404 Not found" />
      <div className="notfound-wrapper">
        <div class="not-found-text" data-splitting="">
          404
        </div>
        <a className="back-to-home-link" href="/">Back to home</a>
      </div>
    </Layout>
  )
}

export default NotFoundPage
