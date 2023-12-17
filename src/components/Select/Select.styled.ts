import styled from "styled-components";

const Group = styled.div<{ $top?: number; $left?: number; $width?: number }>`
  position: absolute;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;

  display: inline-flex;
  flex-direction: column;

  background: oklch(65.57% 0.19552898037793698 288.17775174927874);
  color: white;

  border-radius: 0 0 16px 16px;
`;

const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  gap: 8px;
  padding: 4px;
  outline-offset: 4px;
  &:hover {
    & > span {
      background: oklch(77.54% 0.124 291.56);
      border-radius: 16px;
      color: black;

      padding-right: 16px;
      padding-left: 16px;
      transition: all 300ms ease;
    }
  }
`;

const Item = styled.span`
  padding: 4px;
  text-align: center;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Button = styled.button<{ $isModalOpen: boolean }>`
  position: absolute;
  top: 50%;
  left: calc(50% - 100px);

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  cursor: pointer;
  padding: 16px;
  background-color: oklch(65.57% 0.19552898037793698 288.17775174927874);
  border-radius: 24px 24px ${(props) => (props.$isModalOpen ? 0 : 24)}px
    ${(props) => (props.$isModalOpen ? 0 : 24)}px;
  font-weight: 700;

  color: white;
`;

const ArrowDownward = styled.span<{ $isModalOpen: boolean }>`
  transform: rotate(
    ${({ $isModalOpen }) => ($isModalOpen ? "180deg" : "0deg")}
  );
  transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export { Group, Item, ItemWrapper, Content, Button, ArrowDownward };
