import Video from "../components/Video";
import { videos } from "../util/videoData";
import Layout from "../components/Layout/index";

function Home(): JSX.Element {
  return (
    <Layout>
      {videos.map((v) => (
        <section key={v.id}>
          <Video {...v} />
        </section>
      ))}
    </Layout>
  );
}

export default Home;
