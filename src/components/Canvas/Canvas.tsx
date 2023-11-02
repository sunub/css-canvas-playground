import React, { useEffect } from "react";
import Canvas from './Canvas.helper';
import styled from 'styled-components';

const Wrapper = styled.div`
	background: black;
`

const Title = styled.h1`
	position: absolute;
	left: calc(calc(100dvw / 2) - 5rem - 12px);
	top: calc(calc(100dvh / 2) - 5rem + 12px);
	font-size: 5rem;

	color: oklch(87.76% 0.16 84.7);
	text-shadow: oklch(87.76% 0.16 84.7) 0px 0px 6px;
	filter: blur(1px);
	font-family: 'Bebas Neue', Tahoma, Geneva, Verdana, sans-serif;
`

function CanvasComponent() {
	const ref = React.useRef<HTMLCanvasElement>(null);
	const titleRef = React.useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const canvasClass = new Canvas(ref.current, titleRef.current);
		canvasClass.draw();
	}, [])

	return (
		<Wrapper>
			<Title ref={titleRef} >Rain</Title>
			<figure>
				<canvas id='background-canvas' ref={ref} style={{
					display: "block",
					width: "100%",
					height: "100%",
				}} />
			</figure>
		</Wrapper>
	);
}

export default CanvasComponent;
