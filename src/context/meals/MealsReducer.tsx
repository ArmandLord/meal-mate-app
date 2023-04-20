import { ADD_MEAL, COINCIDENCES } from "./MealsTypes";

export const MealsReducer = (
  state: any,
  { payload, type }: { payload: any; type: string }
) => {
  switch (type) {
    case ADD_MEAL:
      return {
        ...state,
        [payload.user]: [...state[payload.user], payload.meal],
      };

    case COINCIDENCES:
      return {
        ...state,
        coincidences: payload.coincidences,
      };

    default:
      return state;
  }
};
