import { createRef } from "react";
import Vimeo from "@u-wave/react-vimeo";

import Hero from "../components/Hero";

const videoID = "412313385";

const vids = [videoID, videoID, videoID, videoID];

function Home(): JSX.Element {
  return (
    <div className="container">
      <Hero title="Director" subtitle="build your next banger" />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {vids.map((vid, index) => (
          <div key={vid} role="button" style={{ margin: 10 }}>
            <Vimeo video={vid} showTitle controls={false} width={300} loop />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
