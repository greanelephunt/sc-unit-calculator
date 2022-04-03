import classes from "./Factions.module.css";
import FactionButton from "./FactionButton";

import aeon from "../../images/ui/aeon.png";
import aeon_hover from "../../images/ui/aeon-hover.png";
import seraphim from "../../images/ui/seraphim.png";
import seraphim_hover from "../../images/ui/seraphim-hover.png";
import cybran from "../../images/ui/cybran.png";
import cybran_hover from "../../images/ui/cybran-hover.png";
import uef from "../../images/ui/uef.png";
import uef_hover from "../../images/ui/uef-hover.png";

const Factions = (props) => {

  return (
    <div className={classes.factions}>
      <FactionButton img={aeon} imgHover={aeon_hover} alt="Aeon"/>
      <FactionButton img={seraphim} imgHover={seraphim_hover} alt="Seraphim"/>
      <FactionButton img={cybran} imgHover={cybran_hover} onClick={props.onFactionChange.bind(this, "cybran")} alt="Cybran"/>
      <FactionButton img={uef} imgHover={uef_hover}  onClick={props.onFactionChange.bind(this, "uef")} alt="UEF"/>
    </div>
  );
};

export default Factions;
