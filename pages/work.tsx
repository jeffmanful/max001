import styled from "styled-components";
import { videos } from "~/util/videoData";
import Layout from "~/components/Layout";
import Panel from "~/components/Panel";
import { useState, useEffect } from "react";

const WorkLayout = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    flex-direction: column;
    height: 800px;
    overflow: scroll;
  }

  .right {
    .plyr {
      max-height: 100px;
      opacity: 0.8;
    }
    height: 800px;
    flex-direction: column;
  }
`;

const Work = () => {
  const [currentTitle, setTitle] = useState(null);
  const [currentVid, setVid] = useState(videos[0]);

  const handleHover = (event, title) => {
    if (currentTitle !== title) {
      setTitle(title);
    }
  };

  const handleLeave = () => {
    setTitle(null);
  };

  useEffect(() => {
    const vid = videos.filter((v) => v.brand === currentTitle)[0];
    setVid(vid);
  }, [currentTitle]);

  return (
    <Layout overflow="hidden">
      <WorkLayout>
        <section className="left">
          {videos.map(
            (v) =>
              v.brand && (
                <>
                  <Panel
                    title={v.brand}
                    key={v.id}
                    onHover={handleHover}
                    onLeave={handleLeave}
                    video={v}
                  />
                </>
              )
          )}
        </section>

        <section className="right">
          <p>{currentVid?.title}</p>
        </section>
      </WorkLayout>
    </Layout>
  );
};

export default Work;
