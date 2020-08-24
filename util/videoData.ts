interface Video {
  title: string;
  id: string;
  roles?: string[];
  credits?: string;
}

export const showReelVideo: Video = {
  title: "Showreel",
  id: "329412311",
};

// all the video data
export const videos: Video[] = [
  {
    id: "412320471",
    title: "Devenny 404 - Running Man",
  },
  {
    id: "412313385",
    title: "UKNWN - Adele",
  },
  {
    id: "396146698",
    title: "Puma x Office",
  },
  {
    id: "393454574",
    title: "Colmar Originals | SS19",
  },
  {
    id: "393451334",
    title: "Nike x Footlocker | Nike Shox Pt.1",
  },
  {
    id: "393186691",
    title: "Nike x Soccer Bible | Sam Kerr",
  },
  {
    id: "393126702",
    title: "GQ x Bastille x The Design Museum | Stanley Kubrick Exhibition",
  },
  {
    id: "392773079",
    title: "Calvin Klein x Magnus Ronning",
  },
  {
    id: "392769819",
    title: "Devenny 404 - Pause",
  },
  {
    id: "371861061",
    title: "Rolls-Royce | Black Badge Cullinan",
  },
];
