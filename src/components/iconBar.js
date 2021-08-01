//sub_bar.js
import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加
import './iconBar.scss';

const IconBar = () => (

  <>
    <aside className="col-2 d-none d-md-block">
      <nav className="icon-bar">
        <div className="site-sub-color">作例</div>
        <Link to="/photoshop/"><div className="icon-btn-photoshop">Photoshop</div></Link>
        <Link to="/illustrator/"><div className="icon-btn-illustrator">Illustrator</div></Link>
        <Link to="/xd/"><div className="icon-btn-xd">XD</div></Link>
        <Link to="/lightroom/"><div className="icon-btn-lightroom">Lightroom</div></Link>
        <Link to="/premiere/"><div className="icon-btn-premiere">Premiere Pro</div></Link>
        <div className="site-sub-color">ストックフォト</div>
        <Link to="/stockphoto/"><div className="icon-btn">Adobe stock</div></Link>
        <div className="site-sub-color">使用技術解説</div>
        <Link to="/technical/"><div className="icon-btn">Technical</div></Link>
        <div className="site-sub-color">サイトについて</div>
        <Link to="/inquiry/"><div className="icon-btn">問い合わせ</div></Link>
        <Link to="/privact/"><div className="icon-btn">ポリシー</div></Link>
      </nav>
    </aside>
  </>
)

export default IconBar
