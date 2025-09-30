import { useState } from "react";

type StartingBalanceCardProps = {
  onNext: () => void;
  onBack?: () => void;
};

export default function StartingBalanceCard({ onNext, onBack }: StartingBalanceCardProps) {
  const [balance, setBalance] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcf7f3] p-4">
      <div className="bg-white rounded-3xl shadow-lg px-8 py-10 w-full max-w-md mx-auto relative flex flex-col items-center">
        {/* Stepper */}
        <div className="flex flex-col items-center mb-6 w-full">
          <span className="mb-2 text-gray-700">1 of 3</span>
          <div className="flex w-full max-w-xs">
            <div className="h-2 flex-1 mx-1 rounded-full bg-[#ec6b4f]" />
            <div className="h-2 flex-1 mx-1 rounded-full bg-gray-200" />
            <div className="h-2 flex-1 mx-1 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center mb-8">
          What’s your current<br />balance?
        </h2>

        {/* Balance Input */}
        <div className="flex items-center w-full max-w-xs bg-white border border-gray-200 rounded-xl px-5 py-4 mb-6">
          <span className="mr-2 text-lg font-bold text-gray-800">$</span>
          <input
            type="number"
            className="flex-1 text-lg font-bold outline-none bg-transparent"
            placeholder="0"
            value={balance}
            min="0"
            onChange={e => setBalance(e.target.value)}
          />
          <span className="ml-2 text-lg text-gray-600 font-medium">USD</span>
        </div>

        {/* Helper Text */}
        <div className="text-center text-gray-700 text-base mb-10">
          We’ll start tracking from here.<br />
          You can update anytime.
        </div>

        {/* Continue */}
        <button
          className="w-full py-3 rounded-xl font-semibold text-lg bg-[#dd5b36] text-white shadow hover:bg-[#c64a30] transition mb-3"
          onClick={onNext}
        >
          Continue
        </button>

        {/* Skip for now */}
        <button
          className="w-full text-[#d4572e] underline font-medium text-base bg-transparent"
          onClick={onNext}
        >
          Skip for now
        </button>

        {/* (Optional) Back button, not shown in the screenshot but available if needed */}
        {onBack && (
          <button
            className="absolute left-4 top-4 text-gray-400 font-medium text-base bg-transparent hover:text-gray-600 transition"
            onClick={onBack}
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
