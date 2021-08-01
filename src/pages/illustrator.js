import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"
// import Test from "../images/test.jpg"


const Illustrator = () => (
  <Layout>
    <Seo title="Illustrator" />
    <h1>Illustrator</h1>
    <p>Adobe Illustrator　作例</p>
    <div>
      <StaticImage
        src="../images/320.png"
        width={100}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <p>グリットレイアウト用の透過グリット 幅60px マージン10px ×2の 計80px ×4で320px 基準にレイアウト モバイル用,</p>
    <div>
      <StaticImage
        src="../images/768.png"
        width={200}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <p>グリットレイアウト用の透過グリット 幅60px マージン10px ×2の 計80px ×9で720px 余り48pxはauto 基準にレイアウト　タブレット用</p>
    <div>
      <StaticImage
        src="../images/960.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div>グリットレイアウト用の透過グリット 幅60px マージン10px ×2の 計80px ×12で960px 基準にレイアウト　デスクトップ用</div>
    <Link to="/xd/">グリット画像の使用例</Link>
    <div>
      <StaticImage
        src="../images/dice.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div>
      <StaticImage
        src="../images/hack.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div>
      <StaticImage
        src="../images/moon.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div>
      <StaticImage
        src="../images/sphere.jpg"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  </Layout>
)

export default Illustrator
