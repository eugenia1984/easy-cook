import styled from "styled-components";

interface TitleH1Props {
  textColor?: string;
}

export const TitleH1 = styled.h1<TitleH1Props>`
  font-size: 36px;
  font-weight: 800;
  color: ${(props) =>
    props.textColor ? props.textColor : "var(--txt-color-black)"};
`;
