/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import IconBar from "./iconBar"
import SubBar from "./subBar"
import Footer from "./footer"
import 'bootstrap/dist/css/bootstrap-reboot.min.css'; // リセットcss
import 'bootstrap/dist/css/bootstrap.min.css'; // ← 追加bootstrap本体
import './layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <body>
        <Header siteTitle={data.site.siteMetadata ?.title || `Title`} />
        <div className="container m-p-reset">
          <div className="row m-p-reset">
            <IconBar />
            <main className="col-7 main-bar">{children} <Footer /></main>
            <SubBar />
          </div>
        </div>
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
