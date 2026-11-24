import type { Meal } from "./types";

export const targets = { calories: 4000, protein: 190, carbs: 470, fat: 110 };

export const sampleMeals: Meal[] = [
  { id: "1", name: "Breakfast", time: "07:30", logged: true, calories: 820, protein: 45, carbs: 95, fat: 25 },
  { id: "2", name: "Meal 2", time: "10:30", logged: true, calories: 900, protein: 35, carbs: 75, fat: 20 },
  { id: "3", name: "Lunch", time: "13:30", logged: true, calories: 80, protein: 38, carbs: 70, fat: 17 },
  { id: "4", name: "Pre-gym snack", time: "16:30", logged: false, calories: 600, protein: 35, carbs: 80, fat: 15 },
  { id: "5", name: "Dinner", time: "19:30", logged: false, calories: 1100, protein: 55, carbs: 100, fat: 28 },
  { id: "6", name: "Before bed", time: "22:00", logged: false, calories: 500, protein: 40, carbs: 40, fat: 18 },
];