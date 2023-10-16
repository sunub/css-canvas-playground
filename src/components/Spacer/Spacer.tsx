import React from "react";
import styled from "styled-components"

type Axis = "horizonal" | "vertical"

interface SpacerProps {
    $axis: Axis;
    $size: number;
}

function getWidth({ $axis, $size }: SpacerProps) {
    return $axis === "horizonal" ? $size : 1
}

function getHeight({ $axis, $size }: SpacerProps) {
    return $axis === "vertical" ? $size : 1
}


const Wrapper = styled.span<{ $axis: Axis, $size: number }>`
    display: block;
    width: ${(props) => getWidth(props)};
    min-width: ${(props) => getWidth(props)};
    height: ${(props) => getHeight(props)};
    min-height: ${(props) => getHeight(props)};
`

function Spacer({ axis, size }: { axis: Axis, size: number }) {
    return (
        <Wrapper $axis={axis} $size={size} />
    )
}

export default Spacer