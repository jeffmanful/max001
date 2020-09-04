import styled from "styled-components";
import { useRouter } from "next/router";

import { Video as VideoType } from "../util/videoData";
import Video from "./Video";

interface PanelProps {
  title: string;
  onHover?: any;
  onLeave?: any;
  video?: VideoType;
}

const Wrapper = styled.div`
  padding: 1rem 5rem 1rem 0.5rem;
  margin: 2em 0;
  transition: background 0.2s;
  cursor: pointer;

  .video {
    position: absolute;
    display: none;
  }
  h2 {
    font-size: 40px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    .video {
      display: block;
      right: 10%;
      top: 20%;
      z-index: -1;
      width: 836px;
    }
  }
`;

const Panel: React.FC<PanelProps> = ({ title, onHover, onLeave, video }) => {
  const router = useRouter();
  const panelTitle = title;

  return (
    <Wrapper
      tabIndex={0}
      onMouseEnter={(event) => onHover(event, panelTitle)}
      onMouseLeave={(event) => onLeave(event, panelTitle)}
    >
      <div
        onClick={() => {
          router.push({
            pathname: `/work/${video.brand}`,
            query: { id: video.id },
          });
        }}
      >
        <h2>{title}</h2>
      </div>
      {video && <Video {...video} />}
    </Wrapper>
  );
};

export default Panel;
