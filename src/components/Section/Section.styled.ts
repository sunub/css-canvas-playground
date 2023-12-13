import styled from "styled-components";

const Wrapper = styled.div<{ $top: number; $left: number; $width: number }>`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;

  display: inline-flex;
  flex-direction: column;
  gap: 8px;

  width: ${({ $width }) => $width}px;
  background: oklch(65.57% 0.19552898037793698 288.17775174927874);
  color: white;
  padding: 4px;

  border-radius: 0 0 16px 16px;
`;

const Item = styled.span`
  padding: 4px;
  text-align: center;
  cursor: pointer;
`;

export { Wrapper, Item };
