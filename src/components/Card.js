import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
// import TagList from './TagList';

const Post = styled.li`
  position: relative;
  /* border: 1px solid ${props => props.theme.colors.secondary}; */
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 200ms,transform 300ms ease;
  will-change:transform;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 1.4rem 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    /* background: ${props => props.theme.colors.tertiary}; */
    transform:translateY(-.3rem);
  }
 > a {
    /* box-shadow: 0 0 10px 0px rgba(32, 69, 251, .2); */
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,.1); */
    /* box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08); */
    background-color:#fff;
    box-shadow: ${props => props.theme.shadow.lg};
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem 0.5rem 1rem;
`

const Date = styled.h3`
  margin: 0 1rem 1rem 1rem;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

// const Tags = styled.ul`
//   display:flex;
//   padding:0 1em;
//   a{
//     padding:2px 4px;
//     margin-right:4px;
//     border-radius:2px;
//     text-decoration:none;
//     color: ${props => props.theme.colors.base};
//     background-color: ${props => props.theme.colors.secondary};
//     &:hover{
//     background-color: ${props => props.theme.colors.highlight};
//     }
//   }
// `

const Card = ({ slug, heroImage, title, publishDate, body, tags, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#efefe'} />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
          />
      </Link>
          {/* <Tags>
            {tags && tags.slice(0, 4).map(t => 
            <li>
              <Link to={'/tags/' + t.slug}>{t.title}</Link>
            </li>
            )}
          </Tags> */}
    </Post>
  )
}

export default Card
