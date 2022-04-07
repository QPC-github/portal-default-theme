import styled from '@portal/styled-components';
import { mediaCSS } from '@redocly/reference-docs';

export const TileText = styled.span<{ color?: string }>`
  display: inline-block;
  font-weight: var(--font-weight-regular);
  overflow: hidden;
  color: ${props => props.color || 'var(--color-text-main)'};
  line-height: 1.25;
  ${mediaCSS({ fontFamily: 'var(--font-family-primary)' })};
`;