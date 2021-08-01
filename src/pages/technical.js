import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"


const Technical = () => (
  <Layout>
    <Seo title="Home" />
    <h1>サイト内部使用技術解説</h1>
    <p>Javascript (Gatsby React(JSX) webpack babel node npm)</p>
    <p>CSS (Bootstrap5 reboot Sass(SCSS))</p>
    <p>Google (Tagmanager Analytics Searchconsole)</p>
    <p>Git (hub)</p>
    <p>Atom</p>
    <h2>理念</h2>
    <p>モバイルファーストの理念に則り、スマートフォンでの閲覧時に最適化されています。</p>
    <p>モバイル部分のCSSから読み込むことで、非力なモバイルマシンでも表示速度に悪影響を与えないよう配慮したレスポンシブコーディングを行いました。</p>
    <p>UXの大原則である3クリック以内に全ての目的のページに遷移できるを実現しています</p>
    <p>一部個人情報も載せているため、noindex設定を行い検索結果に表示されないようにしてあります。</p>
  </Layout>
)

export default Technical
