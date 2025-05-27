export interface Clip {
  id: string;
  title: string;
  duration: string;
  thumbnailUrl: string;
  viralityScore: number;
  tags: string[];
}

export interface ClipResultsProps {
  clips: Clip[];
  originalFileName: string;
}
