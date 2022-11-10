import { createSlice } from "@reduxjs/toolkit";

import uefUnits from "../data/uef.json";
import cybranUnits from "../data/cybran.json";
const TEMP_AEON = uefUnits;
const TEMP_SERAPH = cybranUnits;

const initialState = { faction: "uef", units: uefUnits };

const factionSlice = createSlice({
  name: "faction",
  initialState: initialState,
  reducers: {
    change(store, action) {
      store.faction = action.payload;

      switch (action.payload) {
        case "uef":
          store.units = uefUnits;
          break;
        case "cybran":
          store.units = cybranUnits;
          break;
        case "aeon":
          store.units = TEMP_AEON;
          break;
        case "seraphim":
          store.units = TEMP_SERAPH;
          break;
      }
    },
  },
});

export const factionActions = factionSlice.actions;
export default factionSlice;
