import { useState } from "react";
const Test = () => {
      const [video, setVideo] = useState(null);
     const [loading, setLoading] = useState(false);
     const [videoUrl, setVideoUrl] = useState("");

     const handleFileChange = (e) => {
     setVideo(e.target.files[0]);
     };


   const upload = async ()=>{


               if (!video) {
                    alert("Please select a video");
                    return;
               }

          const formData = new FormData();
          formData.append("video",video);
      
         try {
             setLoading(true);
             const res = await fetch("http://localhost:3000/upload-video",{
               method:'POST',
               body:formData,
             })
             const data = await res.json();
             if(!res.ok){
                throw new Error(data.message || "Upload Failed");
             }
              setVideoUrl(data.url);
             console.log(data.url);
         } catch (error) {
             console.error(error);
             alert(error.message);
         }finally {
      setLoading(false);
    }
          
       

      }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Video 🎥</h2>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
      />

      <br /><br />

      <button onClick={upload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {videoUrl && (
        <div style={{ marginTop: "20px" }}>
          <h3>Uploaded Video:</h3>
          <video width="400" controls>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )

}

export default Test