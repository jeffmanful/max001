import Nav from "../Nav";
import styled from "styled-components";

type Overflow = "scroll" | "hidden";
interface Props {
  detail?: string;
  overflow?: Overflow;
}

const LayoutWrapper = styled.div<Props>`
  height: 90vh;
  overflow: ${(props: Props) => props.overflow};
`;

const Layout: React.FC<Props> = ({ children, detail, overflow = "scroll" }) => {
  return (
    <LayoutWrapper overflow={overflow}>
      <Nav detail={detail} />
      <div>{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;
