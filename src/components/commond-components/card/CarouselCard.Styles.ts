import styled from "styled-components";

export const Container = styled.div`
  width: 156px;
  height: 194px;
  box-shadow: 0 1px 2px 0 rgba(51, 51, 51, 0.15);
  cursor: pointer;

  & > a {
    text-decoration: none;
  }
`;

export const ImageWrapper = styled.div`
  & > img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
  }
`;

export const Title = styled.h3`
  color: #416355;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin: 0.5rem;
`;
