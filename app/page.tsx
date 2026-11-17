import MacroBar from "@/components/MacroBar";
import CalorieRing from "@/components/CalorieRing";

export default function Home() {
  //macros progress diagram
  const macros = [
    {label: "Protein", current: 118, target: 190, colour: "#1D4ED8"},
    {label: "Carbs", current: 240, target: 470, colour: "#0F766E"},
    {label: "Fat", current: 62, target: 110, colour: "#b36b07"},
  ];

  return (
    <main className="min-h-screen bg-stone-100 p-5 text-gray-900">
      <h1 className="text-3xl font-bold">Today</h1>

      <CalorieRing eaten={2140} target={3600} />

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
    </main>
  );

}
