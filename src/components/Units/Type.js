import UnitCard from "./UnitCard";
import classes from "./Type.module.css";

const Type = ({className, units}) => {
  return (
    <div className={`${classes.type} ${className}`} >
      {units.map((unit) => {
        return (
          <UnitCard
            name={unit.name}
            img={unit.img}
            massCost={unit.massCost}
            energyCost={unit.energyCost}
            hp={unit.hp}
          />
        );
      })}
    </div>
  );
};

export default Type;
