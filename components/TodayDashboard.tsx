"use client"

import { useState } from "react";
import type { Meal, Targets } from "@/lib/types";
import { getTotals } from "@/lib/nutrition";
import NextMealCard from "@/components/NextMealCard";
import CalorieRing from "@/components/CalorieRing";
import MacroBar from "@/components/MacroBar";
import MealList from "@/components/MealList"

type TodayDashboardProps = {
    initialMeals: Meal[]
    targets: Targets;
};

export default function TodayDashboard({ initialMeals, targets}: TodayDashboardProps) {
    const [meals, setMeals] = useState(initialMeals);

    function toggleMeal(id: string) {
        setMeals((current) =>
            current.map((meal) =>
                meal.id === id ? { ...meal, logged: !meal.logged } : meal
            )
        );
    }

    const totals = getTotals(meals);
    const caloriesLeft = Math.max(targets.calories - totals.calories, 0);

    const macros = [
        { label: "Protein", current: totals.protein, target: targets.protein, colour: "#1D4ED8" },
        { label: "Carbs", current: totals.carbs, target: targets.carbs, colour: "#0F766E" },
        { label: "Fat", current: totals.fat, target: targets.fat, colour: "#b36b07" },
    ];

    return (
        <>
            <NextMealCard meals={meals} caloriesLeft={caloriesLeft} onLog={toggleMeal} />

            <CalorieRing eaten={totals.calories} target={targets.calories} />

            <section className="mt-4 flex flex-col gap-4 rounded-2xl bg-white p-5">
                {macros.map((macro) => (
                    <MacroBar
                        key={macro.label}
                        label={macro.label}
                        current={macro.current}
                        target={macro.target}
                        colour={macro.colour}
                    />
                ))}
            </section>

            <MealList meals={meals} onToggle={toggleMeal} />
        </>
    );
}



