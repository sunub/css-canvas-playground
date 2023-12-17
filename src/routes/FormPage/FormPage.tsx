import Modal from "@components/Modal";
import * as Styled from "./FormPage.styled";
import Selection from "@components/Selection";
import Select from "@components/Select";
import React from "react";
import useToggle from "@hooks/use-toggle";

const SELECT_ITMES = [
  "로그인 폼",
  "아이디 찾기",
  "비밀번호 찾기",
  "주소 폼",
  "가입 폼",
];

function FormPage() {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  function handleSelect(value: string) {
    setSelectedValue(() => value);
  }

  return (
    <Styled.FormWrapper>
      <Select items={SELECT_ITMES} action={handleSelect} />
      <Modal />
    </Styled.FormWrapper>
  );
}

export default FormPage;
