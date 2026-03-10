import { useState } from "react";

export default function Settings() {
  const [postingPrefs, setPostingPrefs] = useState({
    tone: "professional",
    frequency: "daily",
    topics: ["tech", "leadership"],
    autoPost: false,
    bestTime: true,
  });

  const tones = [
    { id: "professional", label: "Professional" },
    { id: "casual", label: "Casual" },
    { id: "inspirational", label: "Inspirational" },
    { id: "educational", label: "Educational" },
  ];

  const frequencies = [
    { id: "daily", label: "Daily" },
    { id: "weekdays", label: "Weekdays Only" },
    { id: "3x-week", label: "3x per Week" },
    { id: "weekly", label: "Weekly" },
  ];

  const allTopics = [
    "tech",
    "leadership",
    "startup",
    "career",
    "productivity",
    "ai",
    "design",
    "marketing",
    "remote-work",
    "personal-growth",
  ];

  const toggleTopic = (topic) => {
    setPostingPrefs((prev) => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter((t) => t !== topic)
        : [...prev.topics, topic],
    }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-gray-500">
          Configure your posting preferences and account settings
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tone */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">
              Post Tone
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Choose the writing style for AI-generated posts
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {tones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() =>
                    setPostingPrefs({ ...postingPrefs, tone: tone.id })
                  }
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    postingPrefs.tone === tone.id
                      ? "border-brand-500 bg-brand-50 text-brand-500"
                      : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {tone.label}
                </button>
              ))}
            </div>
          </div>

          {/* Frequency */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">
              Posting Frequency
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              How often should LinkPost publish for you?
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {frequencies.map((freq) => (
                <button
                  key={freq.id}
                  onClick={() =>
                    setPostingPrefs({ ...postingPrefs, frequency: freq.id })
                  }
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    postingPrefs.frequency === freq.id
                      ? "border-brand-500 bg-brand-50 text-brand-500"
                      : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {freq.label}
                </button>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">
              Topics of Interest
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Select topics to generate relevant content
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {allTopics.map((topic) => {
                const active = postingPrefs.topics.includes(topic);
                return (
                  <button
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium capitalize transition-all ${
                      active
                        ? "border-brand-500 bg-brand-50 text-brand-500"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {topic.replace("-", " ")}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-5">
            <Toggle
              label="Auto-post"
              description="Automatically publish posts without manual review"
              checked={postingPrefs.autoPost}
              onChange={() =>
                setPostingPrefs({
                  ...postingPrefs,
                  autoPost: !postingPrefs.autoPost,
                })
              }
            />
            <div className="border-t border-gray-100" />
            <Toggle
              label="Best time posting"
              description="AI determines the optimal posting time based on your audience"
              checked={postingPrefs.bestTime}
              onChange={() =>
                setPostingPrefs({
                  ...postingPrefs,
                  bestTime: !postingPrefs.bestTime,
                })
              }
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">Account</h3>
            <div className="mt-4 space-y-3">
              <div className="text-sm">
                <span className="text-gray-500">Email</span>
                <p className="font-medium text-gray-900">user@example.com</p>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">Plan</span>
                <p className="font-medium text-gray-900">Free Tier</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50">
              Upgrade Plan
            </button>
          </div>

          {/* Danger Zone */}
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="text-base font-semibold text-red-900">
              Danger Zone
            </h3>
            <p className="mt-1 text-sm text-red-600">
              Permanent actions that cannot be undone
            </p>
            <div className="mt-4 space-y-2">
              <button className="w-full rounded-xl border border-red-300 px-4 py-2.5 text-sm font-medium text-red-700 transition-all hover:bg-red-100">
                Disconnect LinkedIn
              </button>
              <button className="w-full rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-red-700">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button className="rounded-xl bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 active:scale-[0.98]">
          Save Settings
        </button>
      </div>
    </div>
  );
}

function Toggle({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
          checked ? "bg-brand-500" : "bg-gray-200"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-5.5 mt-0.5 ml-0.5" : "translate-x-0.5 mt-0.5"
          }`}
        />
      </button>
    </div>
  );
}
