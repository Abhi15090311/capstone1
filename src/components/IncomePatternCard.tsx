import { useState } from "react";

type IncomePatternCardProps = {
  onNext: () => void;
  onBack?: () => void; // make optional
};

export default function IncomePatternCard({ onNext, onBack }: IncomePatternCardProps) {
  const [pattern, setPattern] = useState<"Weekly" | "Bi-weekly" | "Monthly" | "Irregular">("Bi-weekly");
  const [payDate, setPayDate] = useState("2024-04-10");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md px-8 py-10 w-[400px] flex flex-col items-center relative">

        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 text-[#c64c30] hover:text-[#ad3712] font-semibold"
          >
            ← Back
          </button>
        )}

        {/* rest of the JSX */}


        {/* Stepper */}
        <div className="flex items-center mb-8 w-full justify-between">
          <div className="flex flex-col items-center flex-1">
            <div className="w-7 h-7 rounded-full bg-[#f9f5f1] flex items-center justify-center border border-gray-200 text-gray-600 text-base font-semibold">1</div>
            <span className="text-xs text-[#211f1e] opacity-70 mt-2">How do you get</span>
          </div>
          <div className="h-1 bg-gray-200 flex-1 mx-2 mt-3"></div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-7 h-7 rounded-full bg-[#c64c30] flex items-center justify-center text-white text-base font-semibold">2</div>
            <span className="text-xs text-[#211f1e] opacity-70 mt-2">Income pattern</span>
          </div>
          <div className="h-1 bg-gray-200 flex-1 mx-2 mt-3"></div>
          <div className="flex flex-col items-center flex-1">
            <div className="w-7 h-7 rounded-full bg-[#f9f5f1] flex items-center justify-center border border-gray-200 text-gray-600 text-base font-semibold">3</div>
            <span className="text-xs text-[#211f1e] opacity-70 mt-2">Bills & runway</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#211f1e] text-center mb-8 leading-8">
          How do you get paid?
        </h2>

        {/* Pattern options */}
        <div className="w-full flex justify-between mb-5">
          {["Weekly", "Bi-weekly", "Monthly", "Irregular"].map((option) => (
            <button
              key={option}
              type="button"
              className={`px-4 py-2 text-base rounded-lg font-medium border transition ${
                pattern === option
                  ? "bg-[#c64c30] text-white"
                  : "bg-white text-[#191411] border-[#f0e6e1] hover:bg-[#faeee5]"
              }`}
              onClick={() => setPattern(option as any)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Pay date */}
        <label className="block text-base mb-1 w-full">Last pay date</label>
        <input
          type="date"
          className="w-full py-2 px-3 rounded-lg border border-gray-200 bg-[#fcf7f3] focus:outline-none focus:border-[#c64c30] transition mb-7"
          value={payDate}
          onChange={e => setPayDate(e.target.value)}
        />

        <button
          className="w-full py-3 rounded-lg bg-[#c64c30] text-white font-semibold text-lg shadow hover:bg-[#ad381e] transition mb-2"
          onClick={onNext}
        >
          Next
        </button>
        <button className="w-full py-2 text-[#211f1e] bg-transparent hover:underline rounded-lg text-base"
        onClick={onNext}>
          Skip for now
        </button>
      </div>
    </div>
  );
}
