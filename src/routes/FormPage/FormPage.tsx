import Modal from "@components/Modal";
import * as Styled from "./FormPage.styled";
import Selection from "@components/Selection";
import Select from "@components/Select";
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
      <Select />
      <Modal />
    </Styled.FormWrapper>
  );
}

export default FormPage;
