import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: oklch(96.88% 0.015 294.47);

  display: flex;
  flex-direction: row;
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

const Svg = styled.svg<{ $isModalOpen: boolean }>`
  transform: rotate(
    ${({ $isModalOpen }) => ($isModalOpen ? "180deg" : "0deg")}
  );
  transition: all 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const SectinoWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export { FormWrapper, Button, Svg, SectinoWrapper };
