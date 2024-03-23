import styled from "styled-components";
interface DirectionBtnProps {
  direction: string;
}

export const navigationStories = (direction: string) => {
  const currentStory = document.querySelector(".current_story") as HTMLElement;

  const progressbar = document.querySelector(
    ".stories__container div"
  ) as HTMLElement;
  const nextStory = currentStory?.nextElementSibling;
  const prevStory = currentStory?.previousElementSibling;

  if (direction === "next") {
    if (!nextStory) {
      return;
    }
    nextStory.scrollIntoView({ behavior: "smooth" });
  } else if (direction === "prev" && prevStory !== progressbar) {
    if (!prevStory || nextStory === progressbar) {
      return;
    }
    prevStory.scrollIntoView({ behavior: "smooth" });
  }
};

const Button = styled.button`
  background-color: color-mix(in oklch, var(--pink-3), var(--color-primary));
  box-shadow: var(--shadow-elevation-high);
  color: oklch(70.8% 0.165 32.85 / 0.4);
  font-weight: 700;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  transition: background 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: var(--pink-4);
    color: var(--pink-0);
  }
`;

/**
 * React Components
 */

export default function DirectionBtn({ direction }: DirectionBtnProps) {
  const content = direction === "prev" ? "navigate_before" : "navigate_next";

  return (
    <Button
      id={`stories__${direction}-btn`}
      className="material-icons"
      onClick={() => {
        navigationStories(direction);
      }}
    >
      {content}
    </Button>
  );
}
