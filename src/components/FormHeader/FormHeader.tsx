import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 3rem 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

function FormHeader() {
  return (
    <Header>
      <Title>로그인</Title>
    </Header>
  );
}

export default FormHeader;
