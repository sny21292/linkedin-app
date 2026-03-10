export default function Connect() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Connect LinkedIn
        </h1>
        <p className="mt-1 text-gray-500">
          Link your LinkedIn account to start auto-posting
        </p>
      </div>

      {/* Connection Status Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-50">
            <svg className="h-10 w-10 text-brand-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>

          <h2 className="mt-5 text-xl font-bold text-gray-900">
            Connect Your LinkedIn
          </h2>
          <p className="mt-2 max-w-sm text-sm text-gray-500">
            Authorize LinkPost to post on your behalf. We only request the
            permissions we need and never access private messages.
          </p>

          <button className="mt-6 flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-600 active:scale-[0.98]">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect with LinkedIn
          </button>
        </div>
      </div>

      {/* Permissions Info */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <PermissionCard
          title="Profile Access"
          description="Read your name, headline, and profile picture to personalize posts."
          icon={<UserIcon />}
        />
        <PermissionCard
          title="Post on Your Behalf"
          description="Create and publish posts to your LinkedIn feed at scheduled times."
          icon={<PenIcon />}
        />
        <PermissionCard
          title="Analytics"
          description="Read engagement metrics like views, likes, and comments on your posts."
          icon={<ChartIcon />}
        />
      </div>

      {/* How it Works */}
      <div className="rounded-2xl border border-gray-200 bg-white p-8">
        <h3 className="text-lg font-semibold text-gray-900">How it works</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Step number="1" title="Connect" desc="Authorize your LinkedIn account with one click via OAuth." />
          <Step number="2" title="Configure" desc="Set your posting preferences, topics, and schedule." />
          <Step number="3" title="Post" desc="AI generates posts and publishes them automatically." />
        </div>
      </div>
    </div>
  );
}

function PermissionCard({ title, description, icon }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
        {icon}
      </div>
      <h3 className="mt-4 text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-1.5 text-sm text-gray-500">{description}</p>
    </div>
  );
}

function Step({ number, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}
