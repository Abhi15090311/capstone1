import { useState } from "react";

type FixedBillsProps = {
  onNext: () => void;
  onBack?: () => void;
};

export default function FixedBills({ onNext }: FixedBillsProps) {
  const [primaryIncomeName, setPrimaryIncomeName] = useState("");
  const [primaryIncomeAmount, setPrimaryIncomeAmount] = useState("");
  const [incomeSources, setIncomeSources] = useState<{ name: string; amount: string }[]>([]);

  const addIncomeSource = () => {
    setIncomeSources([...incomeSources, { name: "", amount: "" }]);
  };

  const handleIncomeChange = (idx: number, field: "name" | "amount", value: string) => {
    setIncomeSources(
      incomeSources.map((src, i) =>
        i === idx ? { ...src, [field]: value } : src
      )
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-96 relative">
        <div className="flex mb-6 border-b border-gray-300 pb-4 justify-between items-center">
          <div className="flex flex-col items-center text-gray-600">
            <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center font-bold">1</div>
            <p className="text-sm mt-2">Starting Balance</p>
          </div>
          <div className="flex flex-col items-center text-white font-semibold">
            <div className="w-7 h-7 rounded-full bg-[#c64c30] flex items-center justify-center font-bold">2</div>
            <p className="text-sm mt-2">Income Sources</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">What are your income sources?</h2>

        <label className="block mb-2 font-medium">Your primary source of income</label>
        <input
          type="text"
          value={primaryIncomeName}
          onChange={e => setPrimaryIncomeName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          placeholder="E.g. Salary, Freelance, Business"
        />
        <input
          type="number"
          value={primaryIncomeAmount}
          onChange={e => setPrimaryIncomeAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Income amount"
        />

        {/* Additional income sources */}
        {incomeSources.map((src, idx) => (
          <div key={idx} className="mb-4">
            <label className="block mb-2 text-sm font-medium">Additional source #{idx + 1}</label>
            <input
              type="text"
              value={src.name}
              onChange={e => handleIncomeChange(idx, "name", e.target.value)}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="Source name (e.g. side gig)"
            />
            <input
              type="number"
              value={src.amount}
              onChange={e => handleIncomeChange(idx, "amount", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Amount"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addIncomeSource}
          className="w-full py-2 mb-4 border border-gray-400 rounded bg-gray-50 hover:bg-yellow-50 text-gray-600 transition"
        >
          + Add another source of income
        </button>

        <button
          className="w-full bg-[#c64c30] text-white py-2 rounded mb-2 hover:bg-yellow-700 transition"
          onClick={onNext}
        >
          Save & Continue
        </button>
        <button
          className="w-full border py-2 rounded hover:bg-yellow-50 transition"
          onClick={onNext}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
