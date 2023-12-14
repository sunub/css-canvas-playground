import React from "react";
import SelectTrigger from "./SelectTrigger";
import SelectContent from "./SelectContent";
import useToggle from "@hooks/use-toggle";
import SelectItem from "./SelectItem";
import useLocation from "@hooks/use-location.hook";

function Select() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const elementRef = React.useRef<HTMLButtonElement>(null);
  const location = useLocation(elementRef);
  const [isOpen, setOpen] = useToggle();

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      const currentTarget = event.target as HTMLElement;
      if (!rootRef.current?.contains(currentTarget) && isOpen) {
        setOpen();
      }
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [rootRef, isOpen, setOpen]);

  return (
    <div ref={rootRef}>
      <SelectTrigger ref={elementRef} isOpen={isOpen} setOpen={setOpen} />
      {isOpen && (
        <SelectContent location={location}>
          <SelectItem value={"로그인 폼"} />
          <SelectItem value={"아이디 찾기"} />
          <SelectItem value={"비밀번호 찾기"} />
          <SelectItem value={"주소 폼"} />
          <SelectItem value={"가입 폼"} />
        </SelectContent>
      )}
    </div>
  );
}

export default Select;
