export interface Video {
  title: string;
  id: string;
  brand?: string;
  roles?: string[];
  credits?: string;
  category?: string;
}

export const showReelVideo: Video = {
  title: "Showreel",
  id: "329412311",
};

// all the video data
// one day will be fetching from a server/backend
export const videos: Video[] = [
  {
    id: "412320471",
    title: "Devenny 404 - Running Man",
    category: "Music",
  },
  {
    id: "412313385",
    title: "UKNWN - Adele",
    category: "Music",
  },
  {
    id: "396146698",
    title: "Puma x Office",
    brand: "Puma",
  },
  {
    id: "393454574",
    title: "Colmar Originals | SS19",
    brand: "Colmar Originals",
  },
  {
    id: "393451334",
    title: "Nike x Footlocker | Nike Shox Pt.1",
    brand: "Nike x Footlocker",
  },
  {
    id: "393186691",
    title: "Nike x Soccer Bible | Sam Kerr",
    brand: "Nike x Soccer Bible",
  },
  {
    id: "393126702",
    title: "GQ x Bastille x The Design Museum | Stanley Kubrick Exhibition",
    brand: "GQ x Bastille",
  },
  {
    id: "392773079",
    title: "Calvin Klein x Magnus Ronning",
    brand: "Calvin Kelin",
  },
  {
    id: "392769819",
    title: "Devenny 404 - Pause",
  },
  {
    id: "371861061",
    title: "Rolls-Royce | Black Badge Cullinan",
    brand: "Rolls-Royce",
  },
];
