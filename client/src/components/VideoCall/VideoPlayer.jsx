import React, {useEffect, useRef} from 'react';


const VideoPlayer =({ stream, muted = false })=> {
    const videoRef = useRef(null);

    useEffect(()=>{
        if(videoRef.current && stream){
            videoRef.current.srcObject = stream;
        }
    },[stream]);
  return (
    <div>
      <video 
        ref={videoRef}
        autoPlay
        playsInline
        muted={muted}
        style={{
            width: "400px",
            borderRadius:"10px",
            background: "black"
        }}
      />
    </div>
  )
}

export default VideoPlayer
