import styled from "styled-components";
import { Title } from "../Hero/styled";

const NavWrapper = styled.nav`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  color: black;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 9999999;
  transition: 0.3s background;

  ul {
    display: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.8);

    ul {
      display: flex;
    }
  }
`;

const StyledLink = styled.a`
  margin: 0 1em;
  cursor: pointer;
  color: white;
  font-size: 18px;
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Title>
        <a href="/">Max Dos Santos</a>
      </Title>
      <Links>
        <StyledLink href="/work">Work</StyledLink>
        <StyledLink href="">Contact</StyledLink>
      </Links>
    </NavWrapper>
  );
};

export default Nav;
