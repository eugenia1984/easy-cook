import styled from "styled-components";

interface TitleH3Props {
  textColor?: string;
}

export const TitleH3 = styled.h3<TitleH3Props>`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => (props.textColor ? props.textColor : "#191919")};
`;
