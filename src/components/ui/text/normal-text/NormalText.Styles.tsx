import styled from 'styled-components';

interface TextNormalProps {
  textColor?: string;
}

export const TextNormal = styled.p<TextNormalProps>`
font-size: 15px;
line-height: 1.8;
padding: 0.75rem 0rem;
color: ${(props) => (props.textColor ? props.textColor : "var(--txt-color-black)")};
`