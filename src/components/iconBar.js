//sub_bar.js
import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加
import './iconBar.scss';

const IconBar = () => (

  <>
    <aside className="col-2">
      <nav className="icon-bar">
        <Link to="">アイコン欄</Link>
      </nav>
    </aside>
  </>
)

export default IconBar
