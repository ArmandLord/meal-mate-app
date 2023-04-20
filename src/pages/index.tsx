import { MainLayout } from "@/components/layouts/MainLayout";
import { MealsContext } from "@/context/meals/MealsContext";
import { ReactElement, useContext } from "react";

export default function Home() {
  const { state, addMeal, combinationOfMeals } = useContext(MealsContext);

  const handleSelectUser = (e: any, user: string) => {
    addMeal(e.target.value, user);
  };

  console.log(state);

  return (
    <>
      <div className="flex items-center justify-around w-full h-1/2">
        <div className="flex flex-col items-center justify-around w-full h-1/2">
          <h2 className="text-stone-100 text-xl">Usuario 1</h2>
          <select
            className="bg-stone-500 text-stone-100 text-xl p-2 rounded-md"
            onChange={(e) => handleSelectUser(e, "userOne")}
          >
            <option value="">Selecciona una comida</option>
            {state.meals.map((meal) => (
              <option key={meal} value={meal}>
                {meal}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center justify-around w-full h-1/2">
          <h2 className="text-stone-100 text-xl">Usuario 2</h2>
          <select
            className="bg-stone-500 text-stone-100 text-xl p-2 rounded-md"
            onChange={(e) => handleSelectUser(e, "userTwo")}
          >
            <option value="">Selecciona una comida</option>
            {state.meals.map((meal) => (
              <option key={meal} value={meal}>
                {meal}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={combinationOfMeals}
        className="bg-stone-500 text-stone-100 text-xl p-2 rounded-md"
      >
        Generar combinación
      </button>
      <section className="flex flex-col items-center justify-around w-full h-1/2">
        <h2 className="text-stone-100 text-xl">Combinaciones:</h2>
        <div className="flex flex-col items-center justify-around w-full h-1/2">
          {state.coincidences.map((coincidence) => (
            <span key={coincidence} className="text-stone-100 text-xl">
              {coincidence}
            </span>
          ))}
        </div>
      </section>
    </>

    //     <span className="text-stone-100 text-xl text-center">
    //       MealMate es una aplicación que te ayudará a crear combinaciones
    //       aleatorias de comidas de manera sencilla. Solo tienes que crear dos
    //       listas con tus comidas favoritas: una lista para ti y otra para tu
    //       pareja. La aplicación se encargará de generar combinaciones al azar a
    //       partir de estas listas para ayudarte a planificar tus comidas de
    //       manera divertida y novedosa. ¡Nunca más tendrás que preguntarte qué
    //       cocinar para la cena!
    //     </span>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
