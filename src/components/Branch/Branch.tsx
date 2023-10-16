import React from "react";
import styled from "styled-components";
import usePrevious from "../../hooks/use-previous.hook";
import * as Icons from "../../icons/Tree";
import useMounted from "../../hooks/use-mounted.hook";
import { animated, useSpring } from "@react-spring/web";
import useMeasure from "../../hooks/use-measure.hook";

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
	const previous = usePrevious(isOpen);
	const isMounted = useMounted();
	const { ref, locInfo } = useMeasure(isMounted);
	const { height, opacity, y } = useSpring({
		from: { height: 0, opacity: 0, y: 0 },
		to: {
			height: isOpen ? locInfo.height : 0,
			opacity: isOpen ? 1 : 0,
			y: isOpen ? 0 : 20,
		}
	})

	if (!isMounted) {
		return null;
	}

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
						opacity: children ? 1 : 0.3
					}}
				/>
				<p>{name}</p>
			</FolderName>
			<Content $isOpen={isOpen} style={{ opacity, height: isOpen && previous === isOpen ? "auto" : height }} >
				<animated.div ref={ref} style={{ y }} >
					{children}
				</animated.div>
			</Content>
		</Wrapper>
	)
}

export default React.memo(Branch);
