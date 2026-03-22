"use client";

import { useActionState, useState } from "react";
import { login, signup } from "@/app/login/actions";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  const [loginState, loginAction, loginPending] = useActionState(login, null);
  const [signupState, signupAction, signupPending] = useActionState(signup, null);

  const error = mode === "login" ? loginState?.error : signupState?.error;
  const pending = mode === "login" ? loginPending : signupPending;
  const action = mode === "login" ? loginAction : signupAction;

  return (
    <div>
      <div className="flex bg-[#111827] p-1 rounded-lg mb-6">
        <button
          onClick={() => setMode("login")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === "login"
              ? "bg-[#374151] text-white shadow-sm"
              : "text-gray-400 hover:text-white"
          }`}
        >
          로그인
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            mode === "signup"
              ? "bg-[#374151] text-white shadow-sm"
              : "text-gray-400 hover:text-white"
          }`}
        >
          회원가입
        </button>
      </div>

      <form action={action} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            이메일 주소
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Mail className="h-4 w-4" />
            </div>
            <input
              name="email"
              type="email"
              placeholder="name@example.com"
              required
              className="w-full pl-10 pr-3 py-2 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-600"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-300">
              비밀번호
            </label>
            {mode === "login" && (
              <a href="#" className="text-xs text-blue-500 hover:text-blue-400 transition-colors">
                비밀번호 찾기
              </a>
            )}
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Lock className="h-4 w-4" />
            </div>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              minLength={6}
              className="w-full pl-10 pr-10 py-2 bg-[#111827] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 focus:outline-none transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="text-red-400 text-sm mt-3 animate-in fade-in text-center p-2 bg-red-500/10 rounded-lg border border-red-500/20">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full py-2.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium rounded-lg transition-colors flex justify-center items-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          style={{ marginTop: '24px' }}
        >
          {pending ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : mode === "login" ? (
            "로그인"
          ) : (
            "가입하기"
          )}
        </button>
      </form>
      
      <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 leading-relaxed">
        계속 진행하면 <a href="#" className="text-gray-400 hover:text-gray-300 hover:underline transition-colors">이용약관</a> 및 <br/> <a href="#" className="text-gray-400 hover:text-gray-300 hover:underline transition-colors">개인정보처리방침</a>에 동의하는 것으로 간주됩니다.
      </div>
    </div>
  );
}
