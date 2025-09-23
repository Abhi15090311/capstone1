import { useState } from "react";

type FixedBillsProps = {
  onNext: () => void;
  onBack?: () => void;
};

export default function FixedBills({ onNext, onBack }: FixedBillsProps) {
  const [rent, setRent] = useState("");
  const [phone, setPhone] = useState("");
  const [runway, setRunway] = useState(90);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-8 w-96 relative">
        {onBack && (
          <button
            className="absolute top-4 left-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={onBack}
          >
            ← Back
          </button>
        )}

        <div className="flex mb-6 border-b border-gray-300 pb-4 justify-between items-center">
          <div className="flex flex-col items-center text-gray-600">
            <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center font-bold">1</div>
            <p className="text-sm mt-2">Starting Balance</p>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center font-bold">2</div>
            <p className="text-sm mt-2">Income Pattern</p>
          </div>
          <div className="flex flex-col items-center text-white font-semibold">
            <div className="w-7 h-7 rounded-full bg-[#c64c30] flex items-center justify-center font-bold">3</div>
            <p className="text-sm mt-2">Bills & Runway</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">What are your fixed bills?</h2>

        <label className="block mb-2 font-medium">Rent</label>
        <input
          type="number"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter rent amount"
        />

        <label className="block mb-2 font-medium">Phone</label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-6"
          placeholder="Enter phone bill"
        />

        <label className="block mb-2 font-medium">Set runway goal (days)</label>
        <input
          type="range"
          min={0}
          max={180}
          value={runway}
          onChange={(e) => setRunway(Number(e.target.value))}
          className="w-full mb-2"
        />
        <p className="text-right text-sm mb-4">{runway} days</p>

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
