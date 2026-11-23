import type { Meal } from "./types";

export function getTotals(meals: Meal[]) {
    return meals
        .filter((meal) => meal.logged)
        .reduce(
            (totals, meal) => ({
                calories: totals.calories + meal.calories,
                protein: totals.protein + meal.protein,
                carbs: totals.carbs + meal.carbs,
                fat: totals.fat + meal.fat,
            }),
            { calories: 0, protein: 0, carbs: 0, fat: 0 } 
        );
}