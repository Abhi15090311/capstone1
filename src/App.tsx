import { useState } from "react";
import Signup from './components/SignUp';
import StartingBalance from './components/StartingBalanceCard';
import FixedBills from './components/FixedBillsCard';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App() {
  const [page, setPage] = useState<"landing" | "signin" | "signup" | "startingBalance" | "fixedBills" | "dashboard">("landing");

  return (
    <div className="min-h-screen w-full bg-[#fcf7f3] flex justify-center items-center relative">
      {/* Universal Back Button */}
      {["signup", "startingBalance", "fixedBills"].includes(page) && (
        <button
          className="absolute top-4 left-4 text-[#c64a30] px-4 py-2 hover:text-[#ad3712] rounded-full shadow cursor-pointer"
          onClick={() => {
            if (page === "signup") setPage("landing");
            else if (page === "startingBalance") setPage("signup");
            else if (page === "fixedBills") setPage("startingBalance");
          }}
        >
          ← Back
        </button>
      )}

      <div className={`w-full ${page === "dashboard" ? "" : "max-w-md mx-auto"}`}>
        {page === "landing" && (
          <>
            <h1 className="text-center text-3xl font-bold text-[#b67328] mt-16 mb-12">Welcome Back</h1>
            <div className="flex gap-6 justify-center">
              <button onClick={() => setPage("signin")}
                className="w-full py-4 border border-[#b67328] rounded-lg text-[#b67328] hover:bg-yellow-100 transition">
                Sign In
              </button>
              <button onClick={() => setPage("signup")}
                className="w-full py-4 bg-[#b67328] text-white rounded-lg hover:bg-yellow-700 transition">
                Sign Up
              </button>
            </div>
          </>
        )}
        {page === "signin" && (
          <Login
            onBack={() => setPage("landing")}
            onLogin={() => setPage("signup")}
            onSuccess={() => setPage('dashboard')}
          />
        )}
        {page === "signup" && (
          <Signup
            onSuccess={() => setPage("startingBalance")}
            onLogin={() => setPage("signin")}
          />
        )}
        {page === "startingBalance" && <StartingBalance onNext={() => setPage("fixedBills")} />}
        {page === "fixedBills" && <FixedBills onNext={() => setPage("dashboard")} onBack={() => setPage("startingBalance")} />}
        {page === "dashboard" && <Dashboard />}
      </div>
    </div>
  );
}
