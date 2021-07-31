//components/header.js
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  // ↓ 追加
  <>
    <style type="text/css">
      {`
  .bg-purple {
    background-color: purple;
    color: white;
  }
  `}
    </style>
    <header className="bg-purple">
      <Container>
        <Navbar expand="md" variant="dark">
          <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link to="/patients" className="nav-link" activeClassName="active">患者の方へ</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/doctors" className="nav-link" activeClassName="active">医師の方へ</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  </>                // ← 追加（これはReact.Fragmentのこと？）
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
