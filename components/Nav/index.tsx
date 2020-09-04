import styled from "styled-components";
import { Title } from "../Hero/styled";
import { NavWrapper, Links, StyledLink } from "./styled";

interface Props {
  detail?: string;
}

const Nav: React.FC<Props> = ({ detail }) => {
  return (
    <NavWrapper>
      <Title>
        <a href="/">Max Dos Santos</a>
        {detail && <span>{detail}</span>}
      </Title>
      <Links>
        <StyledLink href="/work">Work</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
      </Links>
    </NavWrapper>
  );
};

export default Nav;
