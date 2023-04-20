import { MainLayout } from "@/components/layouts/MainLayout";
import { ReactElement, useState } from "react";

interface PropsMeals {
  userOneList: string[];
  userTwoList: string[];
}

export default function Home() {
  const [meals, setMeals] = useState<PropsMeals>({
    userOneList: [],
    userTwoList: [],
  });

  const [coincidences, setCoincidences] = useState<string[]>([]);

  const handleSelectUserOne = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setMeals((prevState) => ({
      ...prevState,
      userOneList: [...prevState.userOneList, value],
    }));
  };

  const handleSelectUserTwo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setMeals((prevState) => ({
      ...prevState,
      userTwoList: [...prevState.userTwoList, value],
    }));
  };

  const combinationOfMeals = () => {
    const { userOneList, userTwoList } = meals;
    // devulva las coincidencias
    const coincidences = userOneList.filter((meal) =>
      userTwoList.includes(meal)
    );

    setCoincidences(coincidences);
  };

  console.log(meals);
  const mealsList = [
    "Pasta",
    "Pizza",
    "Hamburguesa",
    "Sushi",
    "Tacos",
    "Tortas",
  ];
  return (
    <>
      <h1>armando</h1>
    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <section className="flex flex-col items-center justify-around w-full h-1/2">
    //     <h1 className="text-stone-100 text-3xl">MealMeate</h1>
    //     {/* <span className="text-stone-100 text-xl text-center">
    //       MealMate es una aplicación que te ayudará a crear combinaciones
    //       aleatorias de comidas de manera sencilla. Solo tienes que crear dos
    //       listas con tus comidas favoritas: una lista para ti y otra para tu
    //       pareja. La aplicación se encargará de generar combinaciones al azar a
    //       partir de estas listas para ayudarte a planificar tus comidas de
    //       manera divertida y novedosa. ¡Nunca más tendrás que preguntarte qué
    //       cocinar para la cena!
    //     </span> */}

    //     {/* construye inputs que mapee mealsList */}
    //     <div className="flex items-center justify-around w-full h-1/2">
    //       <div className="flex flex-col items-center justify-around w-full h-1/2">
    //         <h2 className="text-stone-100 text-xl">Usuario 1</h2>
    //         <select
    //           className="bg-stone-500 text-stone-100 text-xl p-2 rounded-md"
    //           onChange={handleSelectUserOne}
    //         >
    //           <option value="">Selecciona una comida</option>
    //           {mealsList.map((meal) => (
    //             <option key={meal} value={meal}>
    //               {meal}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //       <div className="flex flex-col items-center justify-around w-full h-1/2">
    //         <h2 className="text-stone-100 text-xl">Usuario 2</h2>
    //         <select
    //           className="bg-stone-500 text-stone-100 text-xl p-2 rounded-md"
    //           onChange={handleSelectUserTwo}
    //         >
    //           <option value="">Selecciona una comida</option>
    //           {mealsList.map((meal) => (
    //             <option key={meal} value={meal}>
    //               {meal}
    //             </option>
    //           ))}
    //         </select>
    //       </div>
    //     </div>
    //     <button
    //       onClick={combinationOfMeals}
    //       className="bg-stone-500 text-stone-100 text-xl p-2 rounded-md"
    //     >
    //       Generar combinación
    //     </button>
    //   </section>
    //   <section className="flex flex-col items-center justify-around w-full h-1/2">
    //     <h2 className="text-stone-100 text-xl">Combinaciones:</h2>
    //     <div className="flex flex-col items-center justify-around w-full h-1/2">
    //       {coincidences.map((coincidence) => (
    //         <span key={coincidence} className="text-stone-100 text-xl">
    //           {coincidence}
    //         </span>
    //       ))}
    //     </div>
    //   </section>
    // </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
