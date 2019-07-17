import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-page">
    <img loading="lazy" className="ilustration" src={require("../images/under_construct@2x.svg")} />
      <h1>Nanti dulu ya, websitenya lagi dibuat</h1>
      <div className="contact">
        <p>Kalau ada keperluan, bisa kontak saya</p>
        <a href="mailto:iqbalx64@gmail.com">iqbalx64@gmail.com</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage