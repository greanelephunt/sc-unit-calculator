import UnitCard from "./UnitCard";
import classes from "./Type.module.css";

const Type = (props) => {
  return (
    <div className={`${classes.type} ${props.className}`} >
      {props.units.map((unit) => {
        return (
          <UnitCard
            name={unit.name}
            img={unit.img}
            massCost={unit.massCost}
            energyCost={unit.energyCost}
            hp={unit.hp}
            onClick={props.onCardClick}
          />
        );
      })}
    </div>
  );
};

export default Type;
