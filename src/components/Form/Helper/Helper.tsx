import React from "react";
import * as Styled from "../Form.styled";

const HELPERS = [
  {
    name: "비밀번호 찾기",
    to: "/login/find-password",
    left: 0,
  },
  {
    name: "아이디 찾기",
    to: "/login/find",
    left: -25,
  },
  {
    name: "회원가입",
    to: "/login/register",
    left: -24,
  },
];

function Helper() {
  return (
    <Styled.HelpWrapper>
      {HELPERS.map((helper) => (
        <Styled.HelperList key={helper.name} $left={helper.left}>
          <Styled.Helper to={helper.to}>{helper.name}</Styled.Helper>
        </Styled.HelperList>
      ))}
    </Styled.HelpWrapper>
  );
}
export default Helper;
