//components/header.js
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => (
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
          <Navbar.Brand href="/">My portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
              <Nav.Item as="li">
                <Link to="/" className="nav-link" activeClassName="active">このサイトについて</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/" className="nav-link" activeClassName="active">サイト内部使用技術解説</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/" className="nav-link" activeClassName="active">ストックフォト</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/" className="nav-link" activeClassName="active">Adobe 作例</Link>
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
