import type { Meal } from "./types";

export const targets = { calories: 4000, protein: 190, carbs: 470, fat: 110 };

export const sampleMeals: Meal[] = [
  { id: "1", name: "Breakfast", time: "07:30", logged: true, calories: 820, protein: 45, carbs: 95, fat: 25 },
  { id: "2", name: "Meal 2", time: "10:30", logged: true, calories: 640, protein: 35, carbs: 75, fat: 20 },
  { id: "3", name: "Lunch", time: "13:30", logged: false, calories: 680, protein: 38, carbs: 70, fat: 17 },
  { id: "4", name: "Pre-gym snack", time: "16:30", logged: false, calories: 0, protein: 0, carbs: 0, fat: 0 },
  { id: "5", name: "Dinner", time: "19:30", logged: false, calories: 0, protein: 0, carbs: 0, fat: 0 },
  { id: "6", name: "Before bed", time: "22:00", logged: false, calories: 0, protein: 0, carbs: 0, fat: 0 },
];