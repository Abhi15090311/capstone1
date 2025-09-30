import { useState } from "react";

// Pill toggle for bill options
const BillToggle: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button
    type="button"
    className={`px-6 py-2 rounded-xl font-medium border transition text-base m-2
      ${active
        ? "bg-[#f9f5f0] border-[#dfcfc3] text-[#222]"
        : "bg-white border-[#dfcfc3] text-[#444]"
      }`}
    onClick={onClick}
  >
    {label}
  </button>
);

type FixedBillsProps = {
  onNext: () => void;
  onBack?: () => void;
};

export default function FixedBills({ onNext, onBack }: FixedBillsProps) {
  const billOptions = ["Rent", "Phone", "Internet", "Subscriptions"];
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (bill: string) =>
    setSelected(prev =>
      prev.includes(bill) ? prev.filter(b => b !== bill) : [...prev, bill]
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f5f1] p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full mx-auto">
        {/* Progress bar */}
        <div className="flex flex-col items-center mb-5">
          <span className="mb-2 text-gray-700">3 of 3</span>
          <div className="flex w-full max-w-xs">
            <div className="h-2 flex-1 mx-1 rounded-full bg-[#ec6b4f]" />
            <div className="h-2 flex-1 mx-1 rounded-full bg-gray-200" />
            <div className="h-2 flex-1 mx-1 rounded-full bg-gray-200" />
          </div>
        </div>
        <h2 className="text-2xl font-extrabold text-center mb-7">
          Any regular bills we<br />should plan for?
        </h2>
        <div className="flex flex-wrap justify-center mb-6">
          {billOptions.map(bill => (
            <BillToggle
              key={bill}
              label={bill}
              active={selected.includes(bill)}
              onClick={() => toggle(bill)}
            />
          ))}
        </div>
        <p className="text-center text-gray-700 mb-10">
          You can skip this now and add later.
        </p>
        <button
          className="w-full py-3 rounded-xl font-semibold text-lg bg-[#dd5b36] text-white shadow hover:bg-[#c64a30] transition mb-3"
          onClick={onNext}
        >
          Finish
        </button>
        <button
          className="w-full text-[#d4572e] underline font-medium text-base bg-transparent mb-2"
          onClick={onNext}
        >
          Skip
        </button>
        {onBack && (
          <button
            className="w-full text-gray-400 font-medium text-base bg-transparent hover:text-gray-600 transition"
            onClick={onBack}
          >
            Back
          </button>
        )}
      </div>
    </div>
  );
}
