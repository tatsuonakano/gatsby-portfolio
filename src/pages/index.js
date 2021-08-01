import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>このサイトについて</h1>
    <div><Link to="">ホーム</Link></div>
    <div><Link to="inquiry">お問い合わせ</Link></div>
    <div><Link to="privact">プライバシーポリシー</Link></div>
    <div>サイト内部使用技術解説</div>
    <div><Link to="technical">使用技術</Link></div>
    <div>ストックフォト</div>
    <div><Link to="stockphoto">Adobe stock</Link></div>
    <div>作例</div>
    <div><Link to="photoshop">Photoshop作例</Link></div>
    <div><Link to="lightroom">Lightroom作例</Link></div>
    <div><Link to="illustrator">Illustrator作例</Link></div>
    <div><Link to="xd">XD作例</Link></div>
    <div><Link to="premiere">Premiere Pro作例</Link></div>
  </Layout>
)

export default IndexPage
