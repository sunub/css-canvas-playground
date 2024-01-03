import styled from "styled-components";
import { NAMES } from "@/constant/scroll";

const ScrollItems = styled.ul`
  scroll-snap-align: center;

  flex: 100% 1 0;
  width: 70dvw;
  height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid oklch(53.88% 0.029 30.71);
  border-radius: 10px;
  list-style: none;
  padding: 0;
`;

const ScrollItem = styled.li`
  padding-left: 3rem;
  height: 5em;
  border: none;
  border-bottom: 1px solid #ddd;
  counter-increment: index;
  display: flex;
  align-items: center;
  gap: 1em;

  animation: fade-in-on-enter--faede-out-on-exit 200ms ease-in-out;
  animation-timeline: view();

  @supports (animation-timeline: view()) {
    //@ts-ignore
    @keyframes fade-in-on-enter--faede-out-on-exit {
      entry 0% {
        filter: blur(20px);
        opacity: 0;
        transform: translateY(100%) scale(0.75);
      }

      entry 100% {
        filter: blur(0px);
        opacity: 1;
        transform: translateY(0%) scale(1);
      }

      exit 0% {
        filter: blur(0px);
        opacity: 1;
        transform: translateY(0%) scale(1);
      }
      exit 100% {
        opacity: 0;
        transform: translateY(100%) scale(0.75);
        filter: blur(20px);
      }
    }
  }
`;

function FlyInFlyOut({ ...delegated }) {
  return (
    <li>
      <a href={`#0th-item`} />
      <ScrollItems id="0th-item" {...delegated}>
        {NAMES.map((name) => (
          <ScrollItem key={name}>
            <span className="material-icons">account_circle</span>
            {name}
          </ScrollItem>
        ))}
      </ScrollItems>
    </li>
  );
}

export default FlyInFlyOut;
