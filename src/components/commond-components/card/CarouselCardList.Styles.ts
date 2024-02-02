import styled from "styled-components";

export const CarouselWrapper = styled.div`
  display: block;
  font-size: 0;
  line-height: 0;
  overflow-x: auto;
  padding-bottom: 3px;
  scroll-padding: 0 5vw;
  -ms-scroll-snap-type: x proximity;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  white-space: nowrap;
  margin-left: -5vw;
  margin-right: -5vw;
  margin-top: 1rem;
  order: 4;
  overflow-y: hidden;
  width: 100vw;
  cursor: grab;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SeeMoreContainer = styled.div`
  width: 156px;
  height: 194px;
  box-shadow: 0 1px 2px 0 rgba(51, 51, 51, 0.15);
  cursor: pointer;
`;
