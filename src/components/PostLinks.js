import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: ${props => props.theme.button.padding};
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    box-shadow: ${props => props.theme.shadow.base};
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const PostLinks = props => {
  return (
    <Wrapper>
      {props.previous && (
        <PreviousLink to={`/${props.previous.slug}/`}>
          &#8592; Prev Post
        </PreviousLink>
      )}
      {props.next && (
        <NextLink to={`/${props.next.slug}/`}>Next Post &#8594;</NextLink>
      )}
    </Wrapper>
  )
}

export default PostLinks
