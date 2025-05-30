export type Clip = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  viralityScore: number;
  description: string;
  tags: string[];
};

export type ClipResultsProps = {
  clips: Clip[];
  originalFileName: string;
};
