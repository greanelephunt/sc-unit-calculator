import {useState} from "react";
import classes from "./FactionButton.module.css";

const FactionButton = (props) => {
const [image, setImage] = useState(props.img)

    const mouseEnterHandler = () => {
        setImage(props.imgHover);
    }

    const mouseLeaveHandler = () => {
        setImage(props.img);
    }

  return (
    <div className={classes.faction} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} onClick={props.onClick}>
      <img src={image} alt={props.alt}/>
    </div>
  );
};

export default FactionButton;
