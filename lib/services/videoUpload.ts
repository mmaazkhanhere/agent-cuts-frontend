const videoUpload = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload-video`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error('Upload failed', error);
    } 
    
    const data = await response.json();
    return data;

  } catch (error) {
    console.log("error", error);
    throw error
  }
};

export default videoUpload;
