type Skill = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const skills: Skill[] = [
  {
    title: "Frontend Development",
    description:
      "Expert in React and Angular ecosystems with TypeScript. Building component-based UIs, managing complex state, and delivering performant web applications for enterprise clients.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise Applications",
    description:
      "Hands-on development of complex user flows for high-profile clients. Experience with checkout forms, validation logic, feature flags, and incremental delivery in production environments.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Frontend Quality & Stabilization",
    description:
      "Led stabilization efforts that significantly reduced production errors. Establishing coding standards, improving review processes, and strengthening overall code quality across large codebases.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Technical Leadership",
    description:
      "Head of Engineering at Arionkoder, leading remote-first teams. Mentoring engineers, conducting code reviews, and driving engineering quality standards while staying hands-on with production code.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Accessibility & User Experience",
    description:
      "Strong focus on accessibility (a11y) compliance and creating inclusive user experiences. Building interfaces that work for everyone while maintaining high usability standards.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
];

export function Skills(): JSX.Element {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          What I Do
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 sm:mt-6">
          Core competencies in frontend engineering and team leadership
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ title, description, icon }) => (
          <div
            key={title}
            className="group relative rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-brand-primary hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-brand-primary sm:p-8"
          >
            <div className="mb-4 inline-flex rounded-lg bg-brand-primary p-3 text-white transition-transform group-hover:scale-110">
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
