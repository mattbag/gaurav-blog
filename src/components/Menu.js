import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  /* background-color: rgba(255,255,255,0.9); */
  background-color:${props => props.theme.colors.base};
  width: 100%;
  padding: 1em 0;
  position:sticky;
  top:0;
  z-index: 5;
  box-shadow: ${props => props.theme.shadow.base};
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    white-space:nowrap;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
    transition: all 0.2s;
    // border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
        <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              All Articles
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
