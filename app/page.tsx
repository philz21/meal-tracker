import MacroBar from "@/components/MacroBar";
import CalorieRing from "@/components/CalorieRing";
import MealList from "@/components/MealList";
import { sampleMeals, targets } from "@/lib/sampleData";
import { getTotals } from "@/lib/nutrition";

export default function Home() {
  // add up everything logged today.
  const totals = getTotals(sampleMeals);
 
//macros progress diagram
  const macros = [
    {label: "Protein", current: totals.protein, target: targets.protein, colour: "#1D4ED8"},
    {label: "Carbs", current: totals.carbs, target: targets.carbs, colour: "#0F766E"},
    {label: "Fat", current: totals.fat, target: targets.fat, colour: "#b36b07"},
  ];

  return (
    <main className="min-h-screen bg-stone-100 p-5 text-gray-900">
      <h1 className="text-3xl font-bold">Today</h1>

      <CalorieRing eaten={totals.calories} target={targets.calories} />

      <section className="mt-4 flex flex-col gap-4 rounded-2xl bg-white p-5">
        {macros.map((macro) =>
          <MacroBar
            key={macro.label}
            label={macro.label}
            current={macro.current}
            target={macro.target}
            colour={macro.colour}
          />
      )}
      </section>

      <MealList meals={sampleMeals} />
    </main>
  );
}
