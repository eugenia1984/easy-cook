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
  position: absolute;
  z-index: 1;
  top: 4rem;
  left: 20%;
  width: 60%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  text-align: center;
  color: white;

  @media (max-width: 765px) {
    top: 3rem;
    left: 5%;
    width: 90%;
  }

  @media (min-width: 1440px) {
    top: 5rem;
    left: 20%;
    width: 60%;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.primaryBackground3};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: calc(83.33333% - 8.01px);
`;

export const ButtonContainer = styled.div`
  width: 200px;
`;
