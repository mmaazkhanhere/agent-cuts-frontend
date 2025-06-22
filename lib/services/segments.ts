import { Clip } from "@/types/clip";

const segments = async (uniquePhrase: string) => {
   try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/segments/${uniquePhrase}`);

      if(!response.ok){
        const error = await response.json();
        throw new Error('Failed to fetch segments', error);
      }
      const data: Clip = await response.json();
      console.log(data)

      // Add uniquePhrase to each segment for download functionality
    const segmentsWithPhrase = data.segments.map((segment )=> ({
      ...segment,
      uniquePhrase: uniquePhrase
    }));
    
    return {
      ...data,
      segments: segmentsWithPhrase
    };
      
    } catch (error) {
      console.log("error", error);
      throw error
    }
}

export default segments
