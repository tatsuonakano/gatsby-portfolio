import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"


const Stockphoto = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Adobe stock</h1>
    <p>コントリビューターポートフォリオページ</p>
    <a href="https://stock.adobe.com/jp/contributor/209774197/%E9%81%94%E9%9B%84%20%E4%B8%AD%E9%87%8E" target="_blank" rel="noopener noreferrer nofollow">
      <div>
        <StaticImage
          src="../images/st.jpg"
          width={350}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </a>
    <p>↑バナーリンクです。外部サイトへ飛びます。</p>
    <p>その他、Shutterstock・PIXTA・gettyimages等会社に有料写真素材を提供しております。</p>
    <p>現在は、写真素材の販売数を増やす事を目標にしつつ、Adobe Illustratorのスキルアップに励み、いずれかにはベクター形式のイラスト素材を販売できるよう研鑽しております。</p>
  </Layout>
)

export default Stockphoto
