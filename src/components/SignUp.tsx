import { useState } from "react";
import { FiMail, FiLock, FiEye, FiUser } from "react-icons/fi";
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import logo from "../assets/logo.jpeg";

type SignupProps = {
  onSuccess: () => void;
  onLogin: () => void;
};

export default function Signup({ onSuccess, onLogin }: SignupProps) {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checked) {
      alert("Please agree to Terms and Privacy");
      return;
    }
    // Register logic here, then:
    onSuccess();
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      // Handle user info and navigate
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="flex items-center gap-3 mb-8 mt-10 w-full max-w-lg">
        <img src={logo} alt="Smartspend Logo" className="w-12 h-12 rounded-xl object-contain -ml-60" />
        <span className="text-2xl font-bold tracking-wider text-[#c3632e]">SMARTSPEND</span>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-10 w-[400px] flex flex-col items-center">
        <h2 className="mb-7 text-2xl font-bold text-[#c3632e] text-center">Sign up</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          {/* Name Input */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-[#a94e10]"><FiUser size={20} /></span>
            <input type="text" required placeholder="Full name" className="w-full pl-10 pr-3 py-3 rounded-md border border-[#d9cbb2] bg-white placeholder-[#a9470d] focus:outline-none focus:border-[#c3632e] transition" />
          </div>

          {/* Email Input */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-[#a94e10]"><FiMail size={20} /></span>
            <input type="email" required placeholder="Email address" className="w-full pl-10 pr-3 py-3 rounded-md border border-[#d9cbb2] bg-white placeholder-[#a9470d] focus:outline-none focus:border-[#c3632e] transition" />
          </div>

          {/* Password Input */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-[#a94e10]"><FiLock size={20} /></span>
            <input type="password" required placeholder="Password" className="w-full pl-10 pr-10 py-3 rounded-md border border-[#d9cbb2] bg-white placeholder-[#a9470d] focus:outline-none focus:border-[#c3632e] transition" />
            <span className="absolute right-3 top-3 text-[#ad8b42] cursor-pointer">
              <FiEye size={20} />
            </span>
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-center gap-2 text-sm mt-1 text-[#89784f]">
            <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} className="accent-[#a9490a] w-4 h-4 rounded" />
            I agree to <a href="#" className="text-[#c3632e] underline">Terms</a> and <a href="#" className="text-[#c3632e] underline">Privacy</a>
          </label>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 rounded-lg text-white bg-[#c3632e] font-semibold shadow hover:bg-[#993b16] transition">
            Create Account
          </button>
        </form>

        {/* Google Sign-In */}
        <button onClick={signInWithGoogle} className="w-full flex items-center justify-center gap-2 py-3 mt-8 text-white bg-blue-600 rounded-lg shadow hover:bg-red-700 transition">
          {/* Google Logo SVG here */}
          Sign in with Google
        </button>

        <p className="mt-6 text-center text-[#5e4a21]">
          Already have an account?{" "}
          <span
            onClick={onLogin}
            className="cursor-pointer text-[#c3632e] underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
