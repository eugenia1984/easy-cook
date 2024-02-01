import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  height: 22rem;
  position: relative;
`;

export const ImageWrapper = styled.div`
  background-position: 50%;
  background-size: cover;
  display: block;
  min-height: 22rem;
  text-align: center;
  width: 100%;
`;

export const BackgroundOverlay = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5));
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
`;

export const Wrapper = styled.div`
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  position: absolute;
  top: 2rem;
  z-index: 1;
  text-align: center;
  color: white;
  margin: 0 20%;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.primaryBackground3};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: calc(83.33333% - 8.01px);
`;
