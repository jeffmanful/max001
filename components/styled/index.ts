/*
I think we should put core styled components in this directory.
Will clean things up. Gives a place for styled-system components to live

For now each project keeps a set of core styled-system components that should be the 
only builing blocks we need to build components.

This does not apply to styled components that have a singular use. Those components can live in the styled folder in
that component.

We can split this file up as it gets larger.
*/
import styled from "styled-components";
import {
  color,
  position,
  border,
  margin,
  padding,
  flexbox,
  width,
} from "styled-system";

export const Width = styled.div`
  ${width}
  ${margin}
  ${color}
  ${padding}
  ${position}
`;

export const Wrap = styled.div`
  width: 90%;
  max-width: 840px;
  margin: 0 auto;

  ${width}
  ${border}
  ${padding}
  ${margin}`;

export const WrapFlex = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;

    ${border}
    ${padding}
    ${margin}
    ${flexbox}`;

export const Flex = styled.div`
  display: flex;
  ${flexbox}
  ${padding}
`;
