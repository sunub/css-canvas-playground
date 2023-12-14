import * as Styled from "./Select.styled";

function SelectItem({ value }: { value: string }) {
  return (
    <Styled.ItemWrapper key={value} className={`select-item`}>
      <Styled.Item>{value}</Styled.Item>
    </Styled.ItemWrapper>
  );
}

export default SelectItem;
