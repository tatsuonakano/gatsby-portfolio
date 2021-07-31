//footer.js
import { Link } from "gatsby"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加

const Footer = () => (

  <>
    <footer>
      © {new Date().getFullYear()}, Built with
    {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </>
)

export default Footer
