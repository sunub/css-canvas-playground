import React from "react";
import styled from "styled-components";
import usePrevious from "../../hooks/use-previous.hook";
import * as Icons from "../../icons/Tree";
import { animated, useSpring } from "@react-spring/web";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const FolderName = styled.div`
	display: flex;
	flex-direction: row;

	gap: .5rem;
	align-items: center;
	justify-content: flex-start;
`;

const Content = styled(animated.div) <{ $isOpen: boolean }>`
	margin-left: 2rem;
    visibility: ${(props) => props.$isOpen ? "visibilty" : "hidden"};
    transition: visibility ease-in 1000ms;
`

interface BranchProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode,
	name: string,
	defaultOpen?: boolean,
}

function Branch({ children, name, defaultOpen = false }: BranchProps) {
	const [isOpen, setOpen] = React.useState(defaultOpen);
	const [currHeight, setCurrHeight] = React.useState(0);
	const previous = usePrevious(isOpen);
	const ref = React.useRef<HTMLDivElement>(null);
	const { height, opacity, y } = useSpring({
		from: { height: 0, opacity: 0, y: 0 },
		to: {
			height: isOpen ? currHeight : 0,
			opacity: isOpen ? 1 : 0,
			y: isOpen ? 0 : 20,
		}
	})

	React.useEffect(() => {
		if (ref.current) {
			const observer = new ResizeObserver((entries) => {
				for (const entry of entries) {
					const contentRect = entry.contentRect;
					const { height } = contentRect;
					setCurrHeight(height);
				}
			})
			observer.observe(ref.current);
		}
	}, []);

	const IconComponents = children ? (isOpen ? Icons.Minus : Icons.Plus) : Icons.Close;
	return (
		<Wrapper id={`tree-${name}-comp`}>
			<FolderName>
				<IconComponents
					onClick={() => setOpen(!isOpen)}
					style={{
						width: "1em",
						height: "1em",
						cursor: "pointer",
						opacity: children ? 1 : 0.3,
					}}
				/>
				<p>{name}</p>
			</FolderName>
			<Content $isOpen={isOpen} style={{ opacity, height: isOpen && previous === isOpen ? "auto" : height }} >
				<animated.div ref={ref} style={{ y }}   >
					{children}
				</animated.div>
			</Content>
		</Wrapper>
	)
}

export default React.memo(Branch);