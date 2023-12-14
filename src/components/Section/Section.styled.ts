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
  padding: 8px;

  border-radius: 0 0 16px 16px;
  box-shadow: 0px 2.8px 7.4px rgba(0, 0, 0, 0.042),
    0px 6.7px 17.8px rgba(0, 0, 0, 0.061),
    0px 12.5px 33.6px rgba(0, 0, 0, 0.075),
    0px 22.3px 59.9px rgba(0, 0, 0, 0.089),
    0px 41.8px 112px rgba(0, 0, 0, 0.108), 0px 100px 268px rgba(0, 0, 0, 0.15);
`;

const Item = styled.span`
  padding: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: oklch(77.54% 0.124 291.56);
    border-radius: 16px;
    color: black;
  }
`;

export { Wrapper, Item };
