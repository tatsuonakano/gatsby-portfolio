import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"


const Xd = () => (
  <Layout>
    <Seo title="Home" />
    <h1>XD</h1>
    <p>XDの作例です</p>
    <div>
      <StaticImage
        src="../images/xd-a.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div>
      <StaticImage
        src="../images/xd-b.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div>
      <StaticImage
        src="../images/xd-c.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  </Layout>
)

export default Xd
