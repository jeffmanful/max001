import { videos } from "~/util/videoData";
import Video from "~/components/Video";
import Nav from "~/components/Nav";

const Reel = () => {
  return (
    <div className="container">
      <Nav />
      {videos.map((v) => (
        <Video {...v} key={v.id} />
      ))}
    </div>
  );
};

export default Reel;
