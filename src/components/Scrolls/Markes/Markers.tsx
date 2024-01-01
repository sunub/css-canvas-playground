import styled from "styled-components";
import { Link } from "react-router-dom";

const MarkersWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  gap: 1rem;
  padding-top: 3rem;
`;

const MarkersList = styled.li``;

const MarkersItem = styled.a`
  display: block;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  aspect-ratio: 1 /1;
`;

function Markers({ size }: { size: number }) {
  const markers = Array.from({ length: size }, (_, i) => i);

  return (
    <MarkersWrapper id="markers">
      {markers.map((marker) => (
        <MarkersList key={marker}>
          <MarkersItem href={`#${marker}th-item`} />
        </MarkersList>
      ))}
    </MarkersWrapper>
  );
}

export default Markers;
