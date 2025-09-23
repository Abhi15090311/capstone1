import { useState } from "react";
import { FiMail, FiLock, FiEye } from "react-icons/fi";
import { auth, googleProvider } from '../firebase'; 
import { signInWithPopup } from "firebase/auth";
import logo from "../assets/logo.jpeg";

type LoginProps = {
  onBack?: () => void;
  onLogin: () => void; // required for navigation to sign up
};

export default function Login({ onBack, onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google User Info:", result.user);
    } catch (error) {
      console.error("Google sign-in error", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative ">
      {onBack && (
        <button
          onClick={onBack}
          className="absolute top-4 left-4  text-[#c64a30] px-4 py-2  hover:text-[#ad3712] rounded-full  shadow cursor-pointer -ml-[530px]"
          
        >
          ← Back
        </button>
      )}

      <div className="flex items-center gap-3 mb-8 mt-2 w-full max-w-lg justify-center ">
        <img src={logo} alt="SmartSpend Logo" className="w-12 h-12 rounded-xl object-contain -ml-[700px]" />
        <span className="text-2xl font-bold tracking-wider text-[#c64a30]">SMARTSPEND</span>
      </div>

      <div className="bg-white rounded-2xl shadow-lg px-10 py-10 w-[400px] flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-7 text-[#c64c30] text-center tracking-wide">Log in</h2>

        <form className="w-full flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
          <div className="relative">
            <span className="absolute left-3 top-3 text-[#ad381e]"><FiMail size={20} /></span>
            <input
              type="email"
              placeholder="Email address"
              className="w-full py-2 pl-10 pr-3 rounded-md border border-[#ecd7ca] bg-white placeholder-[#b58a6a] text-base outline-none focus:border-[#ad381e]"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-3 text-[#ad381e]"><FiLock size={20} /></span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full py-2 pl-10 pr-10 rounded-md border border-[#ecd7ca] bg-white placeholder-[#b58a6a] text-base outline-none focus:border-[#ad381e]"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-3 text-[#b58a6a] cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <FiEye size={20} />
            </span>
          </div>

          <div className="flex items-center justify-between mt-2 mb-2 w-full">
            <label className="flex items-center text-sm text-[#a08c6d] font-normal">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="mr-2 accent-[#ad381e] rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-[#b58a6a] hover:underline font-normal">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#c64c30] text-white font-semibold text-lg shadow hover:bg-[#ad3712] transition"
          >
            Log in
          </button>
        </form>

        <div className="w-full flex items-center my-6">
          <hr className="flex-grow border-t border-[#b58a6a]" />
          <span className="mx-4 text-[#b58a6a]">OR</span>
          <hr className="flex-grow border-t border-[#b58a6a]" />
        </div>

        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-red-600 text-white font-semibold text-lg shadow hover:bg-red-700 transition"
        >
          {/* Google icon SVG */}
          Sign in with Google
        </button>

        <p className="mt-6 text-[#51341d] text-center">
          Don't have an account?{" "}
          <span
            onClick={onLogin}
            className="cursor-pointer text-[#c64c30] underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
