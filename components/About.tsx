import { Section } from "@/components/Section";

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
    <Section id="about" label="About">
      <div className="max-w-2xl space-y-5 leading-relaxed text-muted sm:text-[1.0625rem]">
        <p>
          I work in React and TypeScript today, with a long Angular background.
          My focus is on the flows where mistakes are expensive: payments,
          authentication and checkout, shipped incrementally behind feature
          flags with safe rollback.
        </p>
        <p>
          I was Head of Engineering at Arionkoder (hiring, team leads, internal
          tooling). Now I&apos;m focused on hands-on, staff-level individual
          contributor work, building with AI agents as part of my daily
          workflow.
        </p>
      </div>

      <dl className="mt-10 grid gap-6 sm:grid-cols-3">
        {skillGroups.map(({ title, items }) => (
          <div key={title}>
            <dt className="font-mono text-[0.8125rem] text-subtle">{title}</dt>
            <dd className="mt-1.5 text-[0.9375rem] leading-relaxed">{items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
