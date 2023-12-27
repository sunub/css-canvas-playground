import * as Styled from "./Select.styled";

function SelectItem({
  value,
  action,
}: {
  value: string;
  action: (value: string) => void;
  toggleOpen: () => void;
}) {
  return (
    <Styled.ItemWrapper
      key={value}
      className={`select-item`}
      onClick={() => {
        action(value);
      }}
    >
      <Styled.Item>{value}</Styled.Item>
    </Styled.ItemWrapper>
  );
}

export default SelectItem;
