import React from 'react';
import { THEME_DARK, THEME_LIGHT, THEME_MIDDLE, useTheme } from 'context/theme-provider';
import uuid from 'react-uuid';
import imgLightSide from 'assets/images/choose/light-side.jpg';
import imgDarkSide from 'assets/images/choose/dark-side.jpg';
import imgFalcon from 'assets/images/choose/falcon.jpg';

type ChooseItemProps = {
  classes: string;
  theme: string;
  text: string;
  img: string;
};

const ChooseSideItem = ({ classes, theme, text, img }: ChooseItemProps) => {
  const isTheme = useTheme();

  return (
    <div
      className={`choose_item choose_item${classes}`}
      onClick={() => (isTheme.change as (str: string) => void)(theme)}
      role="presentation"
    >
      <div className="choose_item__header">{text}</div>
      <img className="choose_item__img" src={img} alt={text} />
    </div>
  );
};

const ChooseSide = (): JSX.Element => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      classes: '__light',
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: '__dark',
    },
    {
      theme: THEME_MIDDLE,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: '__middle',
    },
  ];

  return (
    <div className="choose">
      {elements.map(({ theme, text, img, classes }) => {
        return <ChooseSideItem key={uuid()} theme={theme} text={text} img={img} classes={classes} />;
      })}
    </div>
  );
};

export default ChooseSide;
