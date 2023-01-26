import { css } from "styled-components";

type IWeight = 400 | 500 | 600 | null

export const fontSize = (size = 16, weight?: IWeight, lineHeight?: number) => css`
  font-size: ${size}px;
  font-size: ${(0.0625 * size) + 'rem'};
  ${weight ? 'font-weight: ' + weight : ''};
  ${lineHeight ? 'line-height:' + lineHeight + 'px' : ''};
`;