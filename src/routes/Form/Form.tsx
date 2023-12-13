import useToggle from "../../hooks/use-toggle";
import { createPortal } from "react-dom";
import * as Styled from "./Form.styled";
import Section from "../../components/Section";
import React from "react";

function FormPage() {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  const SectionItems = [
    "로그인 폼",
    "아이디 찾기",
    "비밀번호 찾기",
    "주소 폼",
    "가입 폼",
  ];

  return (
    <>
      <Styled.FormWrapper>
        <Styled.Button
          ref={ref}
          onClick={toggleIsModalOpen}
          $isModalOpen={isModalOpen}
        >
          <span>다이알로그</span>
          <Arrow isModalOpen={isModalOpen} />
        </Styled.Button>
      </Styled.FormWrapper>
      {isModalOpen &&
        ref.current &&
        createPortal(
          <Section target={ref.current} items={SectionItems} />,
          document.getElementById("select-root") as HTMLElement
        )}
    </>
  );
}

function Arrow({ isModalOpen }: { isModalOpen: boolean }) {
  return (
    <Styled.Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-down"
      $isModalOpen={isModalOpen}
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </Styled.Svg>
  );
}

export default FormPage;
