import { Link } from "react-router-dom";
import Flying from "../components/Flying";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--scrollbar-thumb-color);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  padding-top: 32px;

  padding: 0;
  padding-top: 32px;
`;

const Items = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  align-items: center;
  justify-content: center;

  color: var(--pink-5);
`;

const LinkItem = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
`;

function App() {
  const Links = [
    { href: "/tree", name: "Tree" },
    { href: "/stories", name: "Stories" },
    { href: "/background", name: "background" },
    { href: "/keyboard", name: "keyboard" },
    { href: "/form", name: "form" },
    { href: "/svg-page", name: "svgPage" },
    { href: "/scroll-page", name: "scroll" },
  ];

  return (
    <Wrapper>
      <div>
        <Flying />
      </div>
      <Title>CSS PLAY GROUND</Title>
      <List>
        {Links.map(({ href, name }) => (
          <Items key={name}>
            <span className="material-icons">arrow_outward</span>
            <LinkItem to={href}>{name}</LinkItem>
          </Items>
        ))}
      </List>
    </Wrapper>
  );
}

export default App;
