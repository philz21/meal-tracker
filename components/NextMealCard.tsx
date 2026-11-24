"use client";

import type { Meal } from "@/lib/types";
import { useNow } from "@/lib/useNow";
import { timeToMinutes, formatDuration, getNextMeal } from "@/lib/schedule";

type NextMealCardProps = {
    meals: Meal[];
    caloriesLeft: number;
}

export default function NextMealCard({ meals, caloriesLeft }: NextMealCardProps) {
    const now = useNow();
    const nextMeal = getNextMeal(meals);

    if (!nextMeal) {
        return (
            <section className="mt-4 rounded-2xl bg-gray-900 p-5 text-white">
                <h2 className="text-xl font-semibold">Congrats all meals logged today</h2>
            </section>
        );
    }

    const mealsLeft = meals.filter((meal) => !meal.logged).length;
    const aim = Math.round(caloriesLeft / mealsLeft);
    const position = meals.indexOf(nextMeal) + 1;

    let status = "";
    if (now) {
        const nowMinutes = now.getHours() * 60 + now.getMinutes();
        const diff = timeToMinutes(nextMeal.time) - nowMinutes;
        status = diff >= 0 ? `Due in ${formatDuration(diff)}` : `Overdue by ${formatDuration(-diff)}`;
    }

    return (
        <section className="mt-4 flex flex-col gap-3 rounded-2xl bg-gray-900 p-5 text-white">
            <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-300">
                    Next meal · {position} of {meals.length}
                </p>
                <p className="rounded-full bg-lime-300 px-2.5 py-1 text-xs font-semibold text-gray-900">
                    {nextMeal.time}
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{nextMeal.name}</h2>
                <p className="h-6 text-gray-300">
                    {status && `${status} · aim for around ${aim} kcal`}
                </p>     
            </div>
        </section>
    );

}