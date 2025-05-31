// Type definition for a processing step
export type ProcessingStep = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "pending" | "processing" | "completed" | "failed";
};
