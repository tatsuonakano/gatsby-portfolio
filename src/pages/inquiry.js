import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"

const Inquiry = () => (
  <Layout>
    <Seo title="inquiry" />
    <form>
      <p>メールアドレス</p>
      <input />
      <p>お問い合わせ内容</p>
      <div><textarea /></div>
      <input
        type='submit'
        value='送信'
      />
    </form>

  </Layout>
)

export default Inquiry
