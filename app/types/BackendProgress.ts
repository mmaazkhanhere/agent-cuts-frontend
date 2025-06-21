export type BackendProgress = {
  status: string; 
  progress: {
    current_step: string;
    steps_completed: string[];
    percentage: number;
  };
  segment_count: number;
  error: string | null;
  created_at: string;
  updated_at: string;
};

