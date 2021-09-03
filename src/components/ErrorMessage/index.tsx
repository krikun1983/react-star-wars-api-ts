import React from 'react';
import UIVideo from 'components/UI/UIVideo';
import video from 'assets/video/han-solo.mp4';

const ErrorMessage = (): JSX.Element => {
  return (
    <>
      <p className="errors">
        The dark side of the force has won.
        <br /> We cannot display data. <br />
        Come back when fix everything
      </p>
      <UIVideo src={video} classes="video__error" playback={0.8} />
    </>
  );
};

export default ErrorMessage;
