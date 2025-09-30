import { useState } from "react";

type StartingBalanceCardProps = {
  onNext: () => void;
  onBack?: () => void;
};

export default function StartingBalanceCard({ onNext, onBack }: StartingBalanceCardProps) {
  const [currency, setCurrency] = useState("USD");
  const [balance, setBalance] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md px-8 py-10 w-[400px] flex flex-col items-center">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-4 left-4 text-[#a96d31] hover:text-[#c3632e] font-semibold"
          >
            ← Back
          </button>
        )}

        {/* Stepper */}
        <div className="flex items-center mb-8 w-full justify-between">
          <div className="flex flex-col items-center flex-1">
            <div className="w-7 h-7 rounded-full bg-[#c64c30] flex items-center justify-center text-white text-base font-semibold">1</div>
            <span className="text-xs text-[#211f1e] opacity-70 mt-2">Starting balance</span>
          </div>
          
          <div className="flex flex-col items-center flex-1">
            <div className="w-7 h-7 rounded-full bg-[#f9f5f1] flex items-center justify-center border border-gray-200 text-gray-600 text-base font-semibold">2</div>
            <span className="text-xs text-[#211f1e] opacity-70 mt-2">Income Sources</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#211f1e] text-center mb-8 leading-8">
          What’s your<br />starting balance?
        </h2>

        {/* Currency Selector */}
        <div className="w-full">
          <label className="block text-base mb-1">Currency</label>
          <select
            className="w-full py-2 px-3 mb-4 rounded-lg border border-gray-200 bg-[#fcf7f3] focus:outline-none focus:border-[#c64c30] transition"
            value={currency}
            onChange={e => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            
          </select>

          {/* Balance Input */}
          <label className="block text-base mb-1">Starting balance</label>
          <div className="flex items-center mb-2">
            <span className="text-lg text-[#c4b7a5] mr-1">$</span>
            <input
              type="number"
              className="w-full py-2 px-3 rounded-lg border border-gray-200 bg-[#fcf7f3] focus:outline-none focus:border-[#c64c30] transition"
              placeholder="0.00"
              value={balance}
              onChange={e => setBalance(e.target.value)}
            />
          </div>
          <div className="text-xs text-[#b09e85] mb-6 mt-1">
            This helps us calculate your initial Days Left.
          </div>
        </div>

        {/* Buttons */}
        <button
          className="w-full py-3 rounded-lg bg-[#c64c30] text-white font-semibold text-lg shadow hover:bg-[#ad381e] transition mb-2"
          onClick={onNext}
        >
          Save & continue
        </button>
        <button
          className="w-full py-2 text-[#211f1e] bg-transparent hover:underline rounded-lg text-base"
          onClick={onNext}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
