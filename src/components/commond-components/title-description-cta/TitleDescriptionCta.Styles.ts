import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 400px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  position: relative;
  z-index: 1;
  margin: 0 auto;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.primaryBackground3};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: calc(83.33333% - 8.01px);
`;
