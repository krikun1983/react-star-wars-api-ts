import React, { useEffect, useRef } from 'react';
import './ui-video.scss';

type UIvideoProps = {
  src: string;
  classes: string;
  playback: number;
};

const UIVideo = ({ src, classes, playback = 1.0 }: UIvideoProps): JSX.Element => {
  const videoRef = useRef() as React.MutableRefObject<HTMLVideoElement>;
  useEffect(() => {
    videoRef.current.playbackRate = playback;
  }, []);

  return (
    <>
      <video loop autoPlay muted src={src} className={`video ${classes}`} ref={videoRef}>
        <source src={src} />
      </video>
    </>
  );
};

export default UIVideo;
