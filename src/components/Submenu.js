import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: .5em 1.5em;
  overflow:auto;
  ul {
    display: flex;
    padding: 4px 0;
  }

  li {
    display: inline-block;
    margin-right: .5em;
    white-space:nowrap;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Submenu = () =>
  <StaticQuery
    query={graphql`
      {
        allContentfulTag{
          edges {
            node {
              title
              id
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <Nav>
        <ul>
          <li>Tags:</li>
          {/* {console.log(data.allContentfulTag.edges)} */}
          {data.allContentfulTag.edges.map(({ node }) =>
            <li key={node.id}>
              <Link to={'/tag/' + node.slug}>
                {node.title}
              </Link>
            </li>
          )}
        </ul>
        <ul>

        </ul>
      </Nav>
    )}
  />


export default Submenu
