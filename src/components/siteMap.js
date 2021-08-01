//sub_bar.js
import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加
import './siteMap.scss';

const SiteMap = () => (

  <>
    <aside className="site-map">
      <nav>
        <div>Sitemap</div>
        <div><Link to="/">ホーム</Link></div>
        <Link to="/inquiry/"><div className="icon-btn">問い合わせ</div></Link>
        <Link to="/privact/"><div className="icon-btn">ポリシー</div></Link>
        <div>サイト内部使用技術解説</div>
        <Link to="/technical/"><div className="icon-btn">使用技術</div></Link>
        <div>作例</div>
        <Link to="/photoshop/"><div className="icon-btn-photoshop">Photoshop</div></Link>
        <Link to="/illustrator/"><div className="icon-btn-illustrator">Illustrator</div></Link>
        <Link to="/xd/"><div className="icon-btn-xd">XD</div></Link>
        <Link to="/lightroom/"><div className="icon-btn-lightroom">Lightroom</div></Link>
        <Link to="/premiere/"><div className="icon-btn-premiere">Premiere Pro</div></Link>
        <div>ストックフォト</div>
        <Link to="/stockphoto/"><div className="icon-btn">Adobe stock</div></Link>
      </nav>
    </aside>
  </>
)

export default SiteMap
