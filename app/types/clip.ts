export interface Clip {
  id: string;
  title: string;
  duration: string;
  url: string;
  thumbnail: string;
  viralityScore: number;
  description: string;
  tags: string[];
}

export interface ClipResultsProps {
  clips: Clip[];
  originalFileName: string;
}
