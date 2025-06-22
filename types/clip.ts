import {SegmentType } from "./segment";
export type Clip = {
  unique_phrase: string;
  status: string;
  total_segments: number;
  segments: SegmentType[];
};
