import * as Styled from "./Form.styled";
import Selection from "@components/Section";

function FormPage() {
  const SectionItems = [
    "다이알로그",
    "로그인 폼",
    "아이디 찾기",
    "비밀번호 찾기",
    "주소 폼",
    "가입 폼",
  ];

  return (
    <Styled.FormWrapper>
      <Selection items={SectionItems} />
    </Styled.FormWrapper>
  );
}

export default FormPage;
