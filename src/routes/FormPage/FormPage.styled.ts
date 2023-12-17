import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: oklch(96.88% 0.015 294.47);

  display: grid;
  place-items: center;
`;

const Button = styled.button`
  display: grid;
  place-items: center;
  gap: 1rem;

  cursor: pointer;
  padding: 16px;
  background-color: oklch(65.57% 0.19552898037793698 288.17775174927874);
  border-radius: 24px;
  font-weight: 700;

  color: white;
`;

export { FormWrapper, Button };
