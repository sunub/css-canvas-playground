import React, { useEffect } from "react";
import Canvas from './Canvas.helper';
import styled from 'styled-components';

const Title = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;

	color: oklch(75.11% 0.116 237.57);
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

function CanvasComponent() {
	const ref = React.useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvasClass = new Canvas(ref.current);
	}, [])

	return (
		<div>
			<Title>Rain</Title>
			<figure>
				<canvas id='background-canvas' ref={ref} style={{
					display: "block",
					width: "100%",
					height: "100%",
				}} />
			</figure>
		</div>
	);
}

export default CanvasComponent;
