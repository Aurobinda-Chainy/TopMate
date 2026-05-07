import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";

export default function MentorSphereFeaturesPage() {
  const coreFeatures = [
    {
      title: "Real-Time Video Sessions",
      description:
        "High-quality WebRTC powered live mentorship sessions with low latency audio, video, and screen sharing.",
      icon: "🎥",
    },
    {
      title: "1:1 Mentorship",
      description:
        "Book personalized one-on-one mentorship sessions for doubt solving, strategy building, and guided learning.",
      icon: "🧠",
    },
    {
      title: "Batch Learning",
      description:
        "Join structured live batches with ongoing, upcoming, and recorded learning experiences.",
      icon: "👨‍🏫",
    },
    {
      title: "Role-Based Access",
      description:
        "Secure RBAC system for Admins, Mentors, and Students with permission-based workflows.",
      icon: "🔐",
    },
    {
      title: "Instant Notifications",
      description:
        "Receive real-time updates for sessions, batch schedules, assignments, and announcements.",
      icon: "⚡",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Choose schedules that fit your learning pace with short-term and long-term mentorship plans.",
      icon: "📅",
    },
  ];

  const platformFeatures = [
    {
      title: "Admin Dashboard",
      points: [
        "Manage mentors and students",
        "Schedule 1:1 sessions",
        "Create and manage batches",
        "Assign mentors to courses",
        "Track enrollments and performance",
      ],
    },
    {
      title: "Mentor Workspace",
      points: [
        "Access assigned batches only",
        "Manage ongoing sessions",
        "Conduct live classes",
        "View student progress",
        "Structured batch visibility",
      ],
    },
    {
      title: "Student Experience",
      points: [
        "Enroll in mentorship programs",
        "Access live and recorded sessions",
        "Track course progress",
        "Attend doubt-solving sessions",
        "Receive mentor guidance",
      ],
    },
  ];

  const techStack = [
    {
      title: "WebRTC",
      description:
        "Real-time communication engine for video/audio mentorship sessions.",
    },
    {
      title: "Socket.IO",
      description:
        "Live signaling, chat, notifications, and real-time synchronization.",
    },
    {
      title: "MongoDB",
      description:
        "Scalable document database optimized for mentorship workflows.",
    },
    {
      title: "Node.js + Express",
      description:
        "High-performance backend architecture for APIs and session management.",
    },
    {
      title: "Redis",
      description:
        "Fast real-time event processing and scalable socket management.",
    },
    {
      title: "SMTP + OTP",
      description: "Secure email authentication and verification system.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Navbar */}
      <Navbar/>

      {/* Hero */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Platform Features
          </p>

          <h2 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight lg:text-7xl">
            Everything Required For Modern Mentorship Learning
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            MentorSphere combines real-time communication, structured learning,
            scalable mentorship workflows, and secure role-based systems to
            deliver a next-generation educational experience.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
              Explore Features
            </button>

            <button className="rounded-2xl border border-white/20 px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400">
              View Platform Demo
            </button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Core Features
          </p>

          <h2 className="text-4xl font-bold">
            Built For Scalable Mentorship Systems
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              <div className="mb-6 text-5xl transition duration-300 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>

              <p className="leading-8 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Banner */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 rounded-[2rem] border border-white/10 bg-white/5 p-10 lg:grid-cols-2 lg:p-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Real-Time Learning Experience
              </p>

              <h2 className="text-5xl font-extrabold leading-tight">
                Interactive Live Sessions With WebRTC Technology
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                Conduct high-quality mentorship sessions with seamless video,
                audio, live chat, and screen sharing. Optimized for both 1:1
                mentorship and large-scale batch learning.
              </p>

              <div className="mt-10 space-y-4 text-slate-200">
                <div>✔ HD Video & Audio Streaming</div>
                <div>✔ Real-Time Chat & Notifications</div>
                <div>✔ Screen Sharing & Collaboration</div>
                <div>✔ Low Latency Session Experience</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-cyan-500/20 blur-3xl"></div>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                alt="Online Mentorship"
                className="relative h-[500px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="bg-white/[0.03] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Platform Modules
            </p>

            <h2 className="text-4xl font-bold">
              Complete Role-Based Ecosystem
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {platformFeatures.map((module, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-[#0f172a] p-10"
              >
                <h3 className="mb-8 text-3xl font-bold text-cyan-400">
                  {module.title}
                </h3>

                <ul className="space-y-5 text-slate-300">
                  {module.points.map((point, idx) => (
                    <li key={idx}>✔ {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Technology Stack
          </p>

          <h2 className="text-4xl font-bold">
            Engineered With Modern Scalable Technologies
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
            >
              <h3 className="mb-4 text-2xl font-bold text-cyan-400">
                {tech.title}
              </h3>

              <p className="leading-8 text-slate-300">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white/[0.03] py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-10 text-center">
            <h3 className="text-5xl font-extrabold text-cyan-400">15K+</h3>
            <p className="mt-4 text-slate-300">Students Enrolled</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-10 text-center">
            <h3 className="text-5xl font-extrabold text-cyan-400">500+</h3>
            <p className="mt-4 text-slate-300">Expert Mentors</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-10 text-center">
            <h3 className="text-5xl font-extrabold text-cyan-400">98%</h3>
            <p className="mt-4 text-slate-300">Student Satisfaction</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-10 text-center">
            <h3 className="text-5xl font-extrabold text-cyan-400">24/7</h3>
            <p className="mt-4 text-slate-300">Learning Access</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 px-8 py-20 text-center backdrop-blur-xl">
          <h2 className="text-5xl font-extrabold leading-tight">
            Ready To Experience Smart Mentorship?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Join MentorSphere today and unlock personalized mentorship,
            interactive live sessions, structured courses, and scalable learning
            experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <button className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400">
              Start Learning
            </button>

            <button className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold transition hover:border-cyan-400 hover:text-cyan-400">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
