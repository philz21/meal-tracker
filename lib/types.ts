export type Meal = {
  id: string;
  name: string;
  time: string;
  logged: boolean;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type Targets = {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
};