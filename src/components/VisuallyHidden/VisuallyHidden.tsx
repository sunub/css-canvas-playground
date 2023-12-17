import styled from "styled-components";

const HiddenStyles = styled.span`
  position: absolute;
  display: inline-block;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  clip-path: rect(0 0 0 0);
  overflow: hidden;
`;

export default function VisuallyHidden({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HiddenStyles>{children}</HiddenStyles>;
}
