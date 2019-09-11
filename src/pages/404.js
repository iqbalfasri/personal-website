import React from "react"

import SEO from "../components/SeoComponent"
import Layout from "../components/LayoutComponent"
import {  } from "../components/ButtonComponent"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not found" />
    <div className="notfound-wrapper">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
