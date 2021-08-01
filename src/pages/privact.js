import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./style.scss"


const Privacy = () => (
  <Layout>
    <Seo title="privact" />
    <h1>Privacy policy</h1>
    <p>当サイト内における個人情報の取り扱いについて</p>
    <h2>個人情報の利用目的</h2>
    <p>当サイトでは、お問い合わせや記事へのコメントの際、名前やmail address等の個人情報を入力いただく場合がございます。</p>
    <p>取得した個人情報は、お問い合わせに対する回答や必要な情報をe-mailなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。</p>
    <h2>広告について</h2>
    <p>当サイトでは、<s>第三者配信の広告サービス（Google Adsense、A8.net）を利用しており、</s>ユーザーの興味に応じた商品やサービスの広告を表示するため、Cookieを使用しております。</p>
    <p>Cookieを使用することで当サイトはお客様のdeviceを識別できるようになりますが、お客様個人を特定できるものではありません。</p>
    <p>Cookieを無効にする方法やGoogle Adsenseに関する詳細は<a href="https://policies.google.com/technologies/ads?hl=ja">広告-ポリシーと規約-Google</a>をご確認ください</p>
    <p>また、当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを、目的に設定されたAffiliate programである、Amazon Associate Programの参加者です。</p>
    <h2>アクセス解析ツールについて</h2>
    <p>当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を利用しています。</p>
    <p>このGoogle AnalyticsはTraffic dataの収集のためにCookieを使用しております。</p>
    <p>Traffic dataは匿名で収集されており、個人を特定するものではありません。</p>
    <h2>面積事項</h2>
    <p>当サイトからのlinkやbannerなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。</p>
    <p>また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。
    情報が古くなっていることもございます。</p>
    <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
    <h2>著作権について</h2>
    <p>当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。利用されたいとお考えの方は問い合わせフォーム(Inquiry)よりご連絡ください。</p>
    <p>当サイトは著作権や肖像権の侵害を目的としたものではありません。
    著作権や肖像権に関して問題がございましたら、お問い合わせフォーム(Inquiry)よりご連絡ください。迅速に対応いたします。</p>
    <h2>リンクについて</h2>
    <p>当サイトは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。</p>
    <p>ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。</p>
  </Layout>
)

export default Privacy
