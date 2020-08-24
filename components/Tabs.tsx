import styled from "styled-components";

export const Tabs = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  position: fixed;
  top: 30%;

  li {
    list-style: none;
    cursor: pointer;
    margin: 0.5em 1em;
    font-size: 14px;
    font-family: Daikon Light;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Add styles for when mobile */
`;
