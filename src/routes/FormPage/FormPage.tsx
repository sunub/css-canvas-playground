import Modal from "@components/Modal";
import * as Styled from "./FormPage.styled";
import Select from "@components/Select";
import React from "react";
import useToggle from "@hooks/use-toggle";
import Form from "@components/Form";
import FormHeader from "@components/FormHeader";
import Device from "@/components/Device";
import Loading from "@/components/Loading";

const SELECT_ITMES = [
  "로그인 폼",
  "아이디 찾기",
  "비밀번호 찾기",
  "주소 폼",
  "가입 폼",
];

function FormPage() {
  return (
    <Styled.FormWrapper>
      <Device>
        <Loading />
      </Device>
    </Styled.FormWrapper>
  );
}

export default FormPage;

{
  /* <Select items={SELECT_ITMES} action={handleSelect} />
<div>
  <Styled.Button onClick={toggleIsModalOpen}>Open Modal</Styled.Button>
</div>
{isModalOpen && (
  <Modal isModalOpen={isModalOpen} handleDismiss={toggleIsModalOpen}>
    <FormHeader />
    <Form />
  </Modal>
)} */
}
