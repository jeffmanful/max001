import styled from "styled-components";
import { videos, showReelVideo } from "~/util/videoData";
import Video from "~/components/Video";
import { Tabs } from "~/components/Tabs";
import { VideoGallery } from "~/components/VideoGallery";
import Layout from "~/components/Layout";

const MainVideo = styled.div`
  width: 100%;
  @media only screen and (min-width: 500px) {
    .plyr {
      max-height: 100px;
      opacity: 0.8;
    }
  }
`;

const Lay = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    max-width: 20%;
  }

  .right {
    overflow: scroll;
    height: 800px;
    flex-direction: column;
  }
`;

const Reel = () => {
  return (
    <Layout>
      {/* Show reel video */}
      <h1>Projects</h1>
      <MainVideo>
        {/* This should autoplay and loop */}
        {/* <Video {...showReelVideo} /> */}
      </MainVideo>

      {/* Tabs */}
      <Lay>
        <section className="left">
          <Tabs>
            <li>Music Videos</li>
            <li>Documentaries</li>
            <li>Short films</li>
          </Tabs>
        </section>

        <section className="right">
          <VideoGallery>
            {videos.map((v) => (
              <Video {...v} key={v.id} gallery />
            ))}
          </VideoGallery>
        </section>
      </Lay>

      {/* Videos */}
    </Layout>
  );
};

export default Reel;
