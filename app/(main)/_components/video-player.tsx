import React, { Suspense, useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let player: any = null;

    const initializePlayer = () => {
      if (videoRef.current) {
        const playerOptions = {
          controls: true,
          fluid: true,
        };

        player = videojs(videoRef.current, playerOptions);

        // Set the video source
        player.src({
          src: videoUrl,
          type: "video/mp4", // Adjust based on your video format
        });
        // player.on("loadedmetadata", () => {
        //   setIsLoading(false); // Video has loaded
        // });
      }
    };

    initializePlayer();
  }, [videoUrl]);

  return (
    <Suspense fallback="Loing">
      <div data-vjs-player>
        {/* {isLoading && <p>Loading...</p>} */}
        <video ref={videoRef} className="video-js vjs-fluid" />
      </div>
    </Suspense>
  );
};

export default VideoPlayer;
