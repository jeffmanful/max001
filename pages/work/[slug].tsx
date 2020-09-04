/**
 * Page for an individual video
 */
import Layout from "~/components/Layout";
import Video from "~/components/Video";
import { useRouter } from "next/router";

import { videos } from "../../util/videoData";

const Work = () => {
  const router = useRouter();
  const currentVideo = videos.filter((v) => v.id === router.query.id)[0];

  return (
    <Layout detail={` x ${currentVideo?.title}`}>
      <Video {...currentVideo} />
    </Layout>
  );
};

export default Work;
