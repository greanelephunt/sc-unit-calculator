import { useState } from "react";
import { useDispatch } from "react-redux";
import { factionActions } from "../../store/faction-slice";

import classes from "./FactionButton.module.css";

const FactionButton = ({img, imgHover, alt, faction}) => {
  const [image, setImage] = useState(img);
  const dispatch = useDispatch();

  const mouseEnterHandler = () => {
    setImage(imgHover);
  };

  const mouseLeaveHandler = () => {
    setImage(img);
  };

  const clickHandler = () => {
    dispatch(factionActions.change(faction));
  };

  return (
    <div
      className={classes.faction}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={clickHandler}
    >
      <img src={image} alt={alt} />
    </div>
  );
};

export default FactionButton;
