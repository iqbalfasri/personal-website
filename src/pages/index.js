import React from "react"

import Layout from "../components/LayoutComponent"
import SEO from "../components/SeoComponent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main-page">
      <img
        alt="Ilustrasi"
        loading="lazy"
        className="ilustration"
        src={require("../assets/images/under_construct@2x.svg")}
      />
      <h1>Nanti dulu ya, websitenya lagi dibuat</h1>
      <div className="contact">
        <p>Kalau ada keperluan, bisa kontak saya</p>
        <a href="mailto:iqbalx64@gmail.com">iqbalx64@gmail.com</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
