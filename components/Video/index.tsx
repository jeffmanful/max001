import Plyr from "react-plyr";
import { createRef, useState, useEffect } from "react";
import styled from "styled-components";

const VideoGalleryTitle = styled.h4`
  color: black;
  font-weight: lighter;
  padding-top: 0.5em;
  font-size: 18px;
`;

const Wrapper = styled.div<VideoProps>`
  .plyr--full-ui input[type="range"] {
    color: limegreen;
    display: ${(props) => (props.visible ? "block" : "none")};
  }
`;

interface VideoProps {
  id: string;
  title?: string;
  description?: string;
  gallery?: boolean;
  visible?: boolean;
  autoplay?: boolean;
}

const Video: React.FC<VideoProps> = ({
  id,
  title,
  description,
  gallery,
  autoplay,
}) => {
  const [fullscreen, setFullscreen] = useState({
    enabled: false,
  });
  const [videoId, setId] = useState(id);

  useEffect(() => {
    setId(id);
  }, [id]);

  const myRef: any = createRef();

  function playVideo() {
    myRef.current?.play();
  }

  function pauseVideo() {
    myRef.current?.pause();
  }

  function toggleFullscreen() {
    setFullscreen({ enabled: !fullscreen });
  }

  return (
    <Wrapper
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onClick={toggleFullscreen}
      className="video"
    >
      <Plyr
        type="vimeo"
        videoId={videoId}
        ref={myRef}
        hideControls
        controls={[""]}
        fullscreen={fullscreen}
        debug
        enable={false}
        blankVideo
        autoplay={autoplay}
      />
      {gallery && <VideoGalleryTitle>{title}</VideoGalleryTitle>}
      <p>{description}</p>
    </Wrapper>
  );
};

export default Video;
