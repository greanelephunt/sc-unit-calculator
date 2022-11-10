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

const Factions = () => {

  return (
    <div className={classes.factions}>
      <FactionButton img={aeon} imgHover={aeon_hover} alt="Aeon" faction="aeon"/>
      <FactionButton img={seraphim} imgHover={seraphim_hover} alt="Seraphim" faction="seraphim"/>
      <FactionButton img={cybran} imgHover={cybran_hover} alt="Cybran" faction="cybran"/>
      <FactionButton img={uef} imgHover={uef_hover} alt="UEF" faction="uef"/>
    </div>
  );
};

export default Factions;
