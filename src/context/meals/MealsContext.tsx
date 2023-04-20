import { createContext } from "react";
import { InitialState } from "./MealsState";

interface PropsContext {
  state: InitialState;
  addMeal: (meal: string, user: string) => void;
  combinationOfMeals: () => void;
}

export const MealsContext = createContext({} as PropsContext);
