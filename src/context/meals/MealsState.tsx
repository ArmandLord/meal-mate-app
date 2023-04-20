import { PropsWithChildren, useReducer } from "react";
import { MealsContext } from "./MealsContext";
import { MealsReducer as reducer } from "./MealsReducer";
import { ADD_MEAL, COINCIDENCES } from "./MealsTypes";

export interface InitialState {
  meals: string[];
  userOne: string[];
  userTwo: string[];
  coincidences: string[];
}

const MealsState = ({ children }: PropsWithChildren) => {
  const initialState: InitialState = {
    meals: [
      "Chilquiles",
      "Tacos de picañana",
      "Pollo con mole",
      "Caldo de pollo",
      "Quesadillas de atún",
    ],
    userOne: [],
    userTwo: [],
    coincidences: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addMeal = (meal: string, user: string) => {
    dispatch({
      type: ADD_MEAL,
      payload: {
        meal,
        user,
      },
    });
  };

  const combinationOfMeals = () => {
    const coincidences = state.userOne.filter((meal: string) =>
      state.userTwo.includes(meal)
    );
    dispatch({
      type: COINCIDENCES,
      payload: {
        coincidences,
      },
    });
  };

  const contextData = {
    state,
    addMeal,
    combinationOfMeals,
  };
  return (
    <MealsContext.Provider value={contextData}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsState;
