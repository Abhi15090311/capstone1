import React, { useState } from "react";

// Components used inside Pay - define here or import if defined separately

const CardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full mx-auto">
    {children}
  </div>
);

type ProgressProps = { step: number; total: number };

const ProgressStepper: React.FC<ProgressProps> = ({ step, total }) => (
  <div className="flex flex-col items-center mb-6">
    <span className="mb-2 text-gray-700">{`${step} of ${total}`}</span>
    <div className="flex w-full max-w-xs">
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={`h-2 flex-1 mx-1 rounded-full transition-colors duration-200 ${
            i < step ? "bg-[#ec6b4f]" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  </div>
);

type OptionButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

const OptionButton: React.FC<OptionButtonProps> = ({
  label,
  selected,
  onClick,
}) => (
  <button
    className={`py-4 px-6 w-full rounded-xl border-2 transition ${
      selected ? "border-[#ec6b4f] bg-orange-50" : "border-gray-200 bg-white"
    } text-lg font-medium mt-1`}
    type="button"
    onClick={onClick}
  >
    {label}
  </button>
);

type PayProps = { onNext: () => void; onBack?: () => void };

export default function Pay({ onNext, onBack }: PayProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const options = ["Weekly", "Bi-weekly", "Monthly", "Irregular / Not sure"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <CardContainer>
        <ProgressStepper step={2} total={3} />
        <h2 className="text-3xl text-center font-extrabold mb-6">
          How often do you usually get paid?
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-3">
          {options.map((label, idx) => (
            <OptionButton
              key={idx}
              label={label}
              selected={selected === idx}
              onClick={() => setSelected(idx)}
            />
          ))}
        </div>
        <p className="text-gray-700 text-center mb-7">
          Used to forecast income rhythm.
        </p>
        <button
          className="w-full py-3 text-lg font-semibold rounded-2xl bg-[#ec6b4f] text-white mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={selected === null}
          onClick={() => {
            console.log("Selected pay frequency:", options[selected ?? 0]);
            onNext();
          }}
        >
          Continue
        </button>
        {onBack && (
          <button
            className="w-full mt-2 py-2 bg-transparent hover:underline text-center text-gray-700"
            onClick={onBack}
          >
            Back
          </button>
        )}
      </CardContainer>
    </div>
  );
}
