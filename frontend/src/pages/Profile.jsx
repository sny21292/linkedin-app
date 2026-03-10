const user = {
  name: "Sunil Kumar",
  headline: "Full Stack Developer | React & Node.js",
  email: "sunil@example.com",
  bio: "Passionate about building products that help professionals grow their online presence. Currently working on LinkPost — an AI-powered LinkedIn posting tool.",
  location: "India",
  profilePicture: null,
  stats: {
    posts: 47,
    connections: 1284,
    views: 12400,
  },
};

const recentPosts = [
  {
    id: 1,
    content: "Just shipped a new feature that lets users schedule LinkedIn posts with AI suggestions. The response has been incredible!",
    likes: 142,
    comments: 23,
    date: "2 hours ago",
  },
  {
    id: 2,
    content: "3 things I wish I knew when I started coding:\n1. Consistency beats intensity\n2. Read more code than you write\n3. Ship early, iterate often",
    likes: 287,
    comments: 45,
    date: "1 day ago",
  },
  {
    id: 3,
    content: "Remote work isn't about working from home. It's about working from anywhere, with anyone, at any time. The future is async.",
    likes: 98,
    comments: 12,
    date: "3 days ago",
  },
];

export default function Profile() {
  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-brand-500 to-brand-700" />
        <div className="px-6 pb-6">
          <div className="-mt-12 flex items-end gap-5">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-brand-100 text-3xl font-bold text-brand-600 shadow-lg">
              {user.name.charAt(0)}
            </div>
            <div className="mb-1">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-500">{user.headline}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <LocationIcon className="h-4 w-4" />
              {user.location}
            </span>
            <span className="flex items-center gap-1.5">
              <MailIcon className="h-4 w-4" />
              {user.email}
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            {user.bio}
          </p>

          <div className="mt-5 flex gap-3">
            <button className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 active:scale-[0.98]">
              Edit Profile
            </button>
            <button className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50">
              Share Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Stats & Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">Stats</h3>
            <div className="mt-4 space-y-4">
              <StatRow label="Posts" value={user.stats.posts.toLocaleString()} />
              <StatRow label="Connections" value={user.stats.connections.toLocaleString()} />
              <StatRow label="Profile Views" value={user.stats.views.toLocaleString()} />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-base font-semibold text-gray-900">
              LinkedIn Status
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-sm text-gray-700">
                Connected & Active
              </span>
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Last post synced 15 min ago
            </p>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">
                {post.content}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <HeartIcon className="h-4 w-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <ChatIcon className="h-4 w-4" />
                    {post.comments}
                  </span>
                </div>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  );
}

function LocationIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  );
}

function ChatIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
    </svg>
  );
}
