import Plyr from "react-plyr";
import { createRef, useState } from "react";
import styled from "styled-components";

const VideoTitle = styled.h4`
  position: absolute;
  color: coral;
  font-size: 32px;
  right: 0;
  transform: translateY(-85px);
  z-index: 99999999;
  opacity: 0.9;
  text-align: right;
`;

const VideoGalleryTitle = styled.h4`
  color: black;
  font-weight: lighter;
  padding-top: 0.5em;
  font-size: 18px;
`;

// add custom hover effects
// use custom cursor for play and pause
const Wrapper = styled.div`
  .plyr--full-ui input[type="range"] {
    color: limegreen;
  }
`;

interface VideoProps {
  id: string;
  title?: string;
  description?: string;
  gallery?: boolean;
}

const Video: React.FC<VideoProps> = ({
  id = "76979871",
  title,
  description,
  gallery,
}) => {
  const [fullscreen, setFullscreen] = useState({
    enabled: true,
  });

  // keep track of the playing status of each video here

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
        videoId={id}
        ref={myRef}
        hideControls
        controls={[""]}
        fullscreen={fullscreen}
      />
      {/* <VideoTitle>{title}</VideoTitle> */}
      {gallery && <VideoGalleryTitle>{title}</VideoGalleryTitle>}
      <p>{description}</p>
    </Wrapper>
  );
};

export default Video;
