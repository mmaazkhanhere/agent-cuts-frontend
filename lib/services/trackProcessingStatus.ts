import { BackendProgress } from "@/types/BackendProgress";

const trackProcessingStatus = async (uniquePhrase: string): Promise<BackendProgress> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/progress/${uniquePhrase}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data: BackendProgress = await response.json();
    return data;
  } catch (error) {
    console.error("Error in trackProcessingStatus:", error);
    throw error; 
  }
};


export default trackProcessingStatus
