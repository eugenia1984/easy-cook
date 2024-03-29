import styled from "styled-components";

interface TitleH1Props {
  textcolor?: string;
}

export const TitleH1 = styled.h1<TitleH1Props>`
  font-size: 36px;
  font-weight: 800;
  color: ${(props) =>
    props.textcolor ? props.textcolor : props.theme.colors.txtColorBlack};
`;
