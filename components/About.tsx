type SkillGroup = {
  title: string;
  items: string;
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items:
      "React, Next.js, TypeScript, Angular, Nx monorepos, accessibility (a11y), i18n",
  },
  {
    title: "Payments & Auth",
    items: "3D Secure, OAuth with mTLS, JWE, feature-flagged rollouts",
  },
  {
    title: "AI & Tooling",
    items:
      "Agentic development with Claude Code, PRD-driven agent workflows, Node.js, PostgreSQL / Supabase, Prisma, CI/CD",
  },
];

export function About(): JSX.Element {
  return (
    <section id="about" className="bg-background-secondary dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h2>

          {/* Bio Content */}
          <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            <p>
              I&apos;m a frontend engineer with 15+ years on enterprise
              platforms for US companies, including American Express and Toyota.
              Most recently I owned the frontend of 3D Secure card
              authentication for the Amex travel platform, which became the
              shared foundation for all three of its lines of business.
            </p>

            <p>
              I work in React and TypeScript today, with a long Angular
              background. My focus is on the flows where mistakes are expensive:
              payments, authentication and checkout, shipped incrementally
              behind feature flags with safe rollback.
            </p>

            <p>
              I was Head of Engineering at Arionkoder (hiring, team leads,
              internal tooling). Now I&apos;m focused on hands-on, staff-level
              individual contributor work, building with AI agents as part of my
              daily workflow.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8">
            <h3 className="text-xl font-semibold sm:text-2xl">Skills</h3>
            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {skillGroups.map(({ title, items }) => (
                <div key={title}>
                  <dt className="font-medium text-gray-900 dark:text-gray-100">
                    {title}
                  </dt>
                  <dd className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    {items}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
