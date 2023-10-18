import styled from "styled-components"
import { navigationStories } from "./DirectionBtn.helper"

/**
 * Type declaration
 */

interface DirectionBtnProps {
    direction: string
}

/**
 * Styled components
 */

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
`

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
                navigationStories(direction)
            }}
        >
            {content}
        </Button>
    )
}