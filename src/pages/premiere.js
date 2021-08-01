import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"


const Premiere = () => (
  <Layout>
    <Seo title="Premiere Pro" />
    <h1>Premiere Pro</h1>
    <div>
      <StaticImage
        src="../images/pre.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  </Layout>
)

export default Premiere
