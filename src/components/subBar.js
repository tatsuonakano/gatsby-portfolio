//sub_bar.js
import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加
import './subBar.scss';

const SubBar = () => (

  <>
    <aside className="col-3">
      <nav className="sub-bar">
        <Link to="">サブバー</Link>
        <div>sab</div>
        <div>sab</div>
        <div>sab</div>
        <div>sab</div>
        <div>sab</div>
        <div>sab</div>
        <div>sab</div>
        <div>sab</div>
      </nav>
    </aside>
  </>
)

export default SubBar
