import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3rem;
  padding: 2rem 1rem;
  background-color: #f3f5f4;
  min-height: 80vh;
`;

export const Section = styled.section`
  background-color: ${(props) => props.theme.colors.primaryBackground3};
  border-radius: 5px;
  margin: 3rem auto;
  padding: 2rem 2.5rem;
  max-height: fit-content;
  max-width: 600px;
}
`;
