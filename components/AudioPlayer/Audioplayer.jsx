import { useEffect, useRef } from "react";

export default function AudioPlayer({ isActive, selectedAudio }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (isActive) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isActive, selectedAudio]);

  return <audio ref={audioRef} src={selectedAudio} />;
}
