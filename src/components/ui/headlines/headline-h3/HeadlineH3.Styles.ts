import styled from "styled-components";

interface TitleH3Props {
  textcolor?: string;
}

export const TitleH3 = styled.h3<TitleH3Props>`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) =>
    props.textcolor ? props.textcolor : props.theme.colors.txtColorBlack};
`;
