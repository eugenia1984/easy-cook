import styled from "styled-components";

interface TitleH2Props {
  textcolor?: string;
}

export const TitleH2 = styled.h2<TitleH2Props>`
  font-size: 30px;
  font-weight: 800;
  color: ${(props) =>
    props.textcolor ? props.textcolor : props.theme.colors.txtColorBlack};
`;
