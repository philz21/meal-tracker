type MacroBarProps = {
  label: string;
  current: number;
  target: number;
  colour: string;
};

export default function MacroBar({ label, current, target, colour }: MacroBarProps) {
  const percent = Math.min((current / target) * 100, 100);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className="text-gray-500">
          <strong className="text-gray-900">{current}</strong> / {target} g
        </span>
      </div>
      <div className="h-2.5 rounded-full bg-gray-200">
        <div
          className="h-2.5 rounded-full"
          style={{ width: `${percent}%`, backgroundColor: colour }}
        />
      </div>
    </div>
  );
}