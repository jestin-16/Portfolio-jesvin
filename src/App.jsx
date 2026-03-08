import React from "react";

const Portfolio = () => {
  const experiences = [
    {
      role: "Human Resources Executive",
      company: "Pazino Infotech Private Limited",
      duration: "Apr 2025 - Present",
      type: "Full-time",
      skills: "Payroll, People Management"
    },
    {
      role: "Human Resources Executive",
      company: "Maijo Moto - Maruti Suzuki Arena",
      duration: "May 2024 - Apr 2025",
      type: "Full-time",
      skills: "People Management, HR Operations"
    },
    {
      role: "Human Resources Intern",
      company: "Eden Business School",
      duration: "Dec 2023 - May 2024",
      type: "Internship",
      skills: "Microsoft Excel, HR Solutions"
    },
    {
      role: "Human Resources Intern",
      company: "Apollo Hospitals Karnataka",
      duration: "Apr 2023 - May 2023",
      type: "Internship",
      skills: "Recruiting, People Management"
    }
  ];

  const skills = [
    "Human Resources",
    "Talent Acquisition",
    "People Management",
    "Payroll",
    "Employee Engagement",
    "HR Strategy",
    "Recruitment",
    "HR Operations"
  ];

  const splitSkills = (skillString) =>
    skillString
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(56,189,248,0.20),transparent_60%),radial-gradient(700px_circle_at_80%_10%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(800px_circle_at_50%_120%,rgba(34,197,94,0.14),transparent_60%)]" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-1 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for opportunities
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Jesvin Shaji
            </h1>
            <p className="mt-2 text-lg font-medium text-sky-200">HR Executive</p>
            <p className="mt-2 text-sm text-slate-300">Idukki, Kerala, India</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  Talent acquisition & HR ops
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Experience
                </p>
                <p className="mt-1 text-sm text-slate-200">2+ years</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Strengths
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  People management & payroll
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-10 grid gap-8">
          {/* ABOUT */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                About Me
              </h2>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-white/0 via-white/15 to-white/0 sm:block" />
            </div>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-200 sm:text-base">
              <p>
                Retail HR Executive with 2+ years of experience helping
                organizations build strong and engaged teams. Skilled in talent
                acquisition, employee engagement, and HR strategy aligned with
                business goals.
              </p>

              <p>
                Passionate about building inclusive workplace cultures and
                improving employee experience through effective HR practices.
              </p>
            </div>
          </section>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* EXPERIENCE */}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-8">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Experience
              </h2>

              <div className="mt-6 grid gap-4">
                {experiences.map((exp, index) => (
                  <article
                    className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-white/20 hover:bg-black/25"
                    key={index}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm text-slate-300">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                        {exp.type}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-slate-300">{exp.duration}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {splitSkills(exp.skills).map((s) => (
                        <span
                          key={`${exp.company}-${exp.duration}-${s}`}
                          className="inline-flex items-center rounded-full bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-200 ring-1 ring-inset ring-sky-500/20"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* EDUCATION + SKILLS */}
            <section className="grid gap-8">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-8">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  Education
                </h2>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h3 className="text-base font-semibold text-white">
                      MBA - Marketing & HR
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      Santhigiri College
                    </p>
                    <p className="mt-3 text-sm text-slate-300">2022 - 2024</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h3 className="text-base font-semibold text-white">
                      BBA - General
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      NSS College Rajakumari
                    </p>
                    <p className="mt-3 text-sm text-slate-300">2019 - 2022</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-8">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  Skills
                </h2>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-inset ring-emerald-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* CONTACT */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  Contact
                </h2>
                <p className="mt-2 text-sm text-slate-200 sm:text-base">
                  Let’s connect to build strong teams and impactful HR
                  strategies.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-black/10 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/30"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Download Resume
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Message Me
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;