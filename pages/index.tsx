import styled from "styled-components";
import Video from "../components/Video";
import { videos } from "../util/videoData";
import Layout from "../components/Layout/index";
import { showReelVideo } from "~/util/videoData";

const StyledSection = styled.section`
  padding: 10rem;
  background: black;
`;

function Home(): JSX.Element {
  return (
    <Layout>
      <StyledSection>
        <Video {...showReelVideo} />
      </StyledSection>
    </Layout>
  );
}

export default Home;
