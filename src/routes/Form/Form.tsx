import Modal from "@components/Modal";
import * as Styled from "./Form.styled";
import Selection from "@components/Selection";
import React from "react";

function FormPage() {
  const [index, setIndex] = React.useState(0);
  const SectionItems = [
    "로그인 폼",
    "아이디 찾기",
    "비밀번호 찾기",
    "주소 폼",
    "가입 폼",
  ];
  console.log(SectionItems[index]);
  return (
    <Styled.FormWrapper>
      <Selection items={SectionItems} index={index} setIndex={setIndex} />
      <Modal />
    </Styled.FormWrapper>
  );
}

export default FormPage;
