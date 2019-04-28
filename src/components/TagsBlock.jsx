import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TagsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
      padding-bottom: calc(100vh - 660px) !important;
  }
  a {
    margin: 0.8rem;
    color: ${props => props.theme.colors.black.blue};
    padding: 0.5rem 1.2rem;
    background: ${props => props.theme.colors.white.grey};
    border-radius: 10px;
    font-weight: 600;
    font-size: 1em;
    &:hover {
      color: ${props => props.theme.colors.white.light};
      background: ${props => props.theme.colors.primary.light};
      border: ${props => props.theme.colors.primary.light};
    }
  }
`;

const TagsBlock = ({ list }) => (
  <TagsContainer>
    {list &&
      list.map(tag => {
        const upperTag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return (
          <Link key={tag} to={`/tags/${tag}`}>
            <span>{upperTag}</span>
          </Link>
        );
      })}
  </TagsContainer>
);

export default TagsBlock;

TagsBlock.propTypes = {
  list: PropTypes.array,
};
