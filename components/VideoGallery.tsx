import styled from "styled-components";

export const VideoGallery = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  .video {
    margin: 2rem;
  }

  .plyr {
    width: 900px;
    max-width: 900px;
    max-height: 600px;
  }
`;
