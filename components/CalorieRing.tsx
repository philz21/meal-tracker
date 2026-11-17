type CalorieRingProps = {
  eaten: number;
  target: number;
};

export default function CalorieRing({ eaten, target }: CalorieRingProps) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(eaten / target, 1);
  const filled = circumference * progress;
  const left = Math.max(target - eaten, 0);

  return (
    <section className="mt-4 flex items-center gap-5 rounded-2xl bg-white p-5">
      <div className="relative h-[124px] w-[124px] shrink-0">
        <svg width="124" height="124" viewBox="0 0 124 124" className="-rotate-90">
          <circle cx="62" cy="62" r={radius} fill="none" stroke="#ECEEE9" strokeWidth="12" />
          <circle
            cx="62"
            cy="62"
            r={radius}
            fill="none"
            stroke="#D9480F"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${circumference}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold">{eaten.toLocaleString("en-GB")}</p>
          <p className="text-xs text-gray-500">of {target.toLocaleString("en-GB")} kcal</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500">Left to eat today</p>
        <p className="text-3xl font-bold text-orange-700">{left.toLocaleString("en-GB")} kcal</p>
      </div>
    </section>
  );
}