import type { Meal } from "@/lib/types";

type MealListProps = {
  meals: Meal[];
};

export default function MealList({ meals }: MealListProps) {
  return (
    <section className="mt-4 rounded-2xl bg-white px-5 py-2">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-b-0"
        >
          <span
            className={`h-5 w-5 rounded-full border-2 ${
              meal.logged ? "border-teal-700 bg-teal-700" : "border-gray-300"
            }`}
          />
          <span className="flex-1 font-medium">
            {meal.name} <span className="font-normal text-gray-500">· {meal.time}</span>
          </span>
          <span className="text-sm text-gray-500">
            {meal.logged ? `${meal.calories} kcal` : "—"}
          </span>
        </div>
      ))}
    </section>
  );
}