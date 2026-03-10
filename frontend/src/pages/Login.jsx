import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", form);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left — Branding Panel */}
      <div className="hidden w-1/2 flex-col justify-between bg-brand-500 p-12 lg:flex">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white font-bold">
              LP
            </div>
            <span className="text-2xl font-bold text-white">LinkPost</span>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl leading-tight font-extrabold text-white">
            Automate your LinkedIn presence with AI-powered posts.
          </h1>
          <p className="text-lg leading-relaxed text-brand-100">
            Connect your LinkedIn account, set your preferences, and let
            LinkPost craft and schedule engaging posts that grow your network.
          </p>
          <div className="flex gap-8 pt-4">
            <Stat value="10K+" label="Posts Created" />
            <Stat value="5K+" label="Users" />
            <Stat value="98%" label="Satisfaction" />
          </div>
        </div>

        <p className="text-sm text-brand-200">
          © 2026 LinkPost. Built for professionals.
        </p>
      </div>

      {/* Right — Login Form */}
      <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden mb-8 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white font-bold text-sm">
              LP
            </div>
            <span className="text-xl font-bold text-gray-900">
              Link<span className="text-brand-500">Post</span>
            </span>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-2 text-gray-500">
              Sign in to your account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-brand-500 hover:text-brand-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-400">or</span>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 active:scale-[0.98]">
            <LinkedInIcon />
            Continue with LinkedIn
          </button>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-brand-500 hover:text-brand-600"
            >
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-brand-200">{label}</div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
