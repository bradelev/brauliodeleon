import { Section } from "@/components/Section";

type Role = {
  company: string;
  title: string;
  previousTitle?: string;
  period: string;
  stack?: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "iSeatz, American Express Travel Platform",
    title: "Senior Frontend Engineer · via Arionkoder",
    period: "Apr 2024 – Oct 2026",
    stack:
      "React · Next.js · TypeScript · Nx monorepo · OAuth / mTLS · JWE · Contentful · Feature flags",
    highlights: [
      "Owned the frontend of 3D Secure card authentication with American Express, a payments-compliance requirement for the Canadian market, delivered end to end with Amex, infrastructure and business analysts. It became the shared foundation for all three lines of business on the platform.",
      "Became the go-to engineer for Amex authentication issues across teams: represented engineering in cross-team delivery syncs with Amex, and made the flow safe for every team to build and test against without weakening production compliance.",
      "Part of the Cars team, the first to ship to production on the re-engineered platform; then supported the other lines of business through their own production rollouts.",
      "Owned critical checkout flows in a high-traffic transactional product, shipping incrementally behind feature flags with safe rollback.",
    ],
  },
  {
    company: "Arionkoder",
    title:
      "Head of Engineering · Mar 2025 – Oct 2026 · 7 Team Leads, 34 people in total · alongside client delivery",
    previousTitle: "Team Lead / Senior Frontend Engineer · Oct 2021 – Mar 2025",
    period: "Oct 2021 – Oct 2026",
    highlights: [
      "Internal Team Lead for Arionkoder engineers on client placements (Toyota, American Express): onboarding, mentoring and performance follow-up while staying hands-on in delivery.",
      "Defined the Team Lead role framework, separating coordination and people follow-up from technical-referent responsibilities.",
      "Designed the frontend technical hiring process, used for about 50 candidates: assessment kits with seeded bugs scaled by seniority, a live conversational format, 1–4 rubrics and interviewer guides.",
      "Built Engineering Map from scratch, an internal staffing and assignment platform (Next.js, TypeScript, Prisma, AWS) that gave the engineering area visibility into who works where across teams and clients.",
      "Advised the product lead of Sokuvo, the company's AI delivery-layer product, on how an AI-agent software lifecycle works in practice, based on hands-on use of Claude Code.",
    ],
  },
  {
    company: "Pariveda, Toyota Enterprise Platform",
    title: "Senior Frontend Engineer / Team Lead · via Arionkoder",
    period: "Oct 2021 – Apr 2024",
    stack: "Angular · TypeScript",
    highlights: [
      "Stabilized a large, long-lived Angular codebase, bringing production error rates to an all-time low; recognized by product leadership as a key project success.",
      "Led frontend work in a distributed team across 4 time zones (USA, India, Argentina, Colombia), setting the conventions, coding standards and review process the team adopted.",
    ],
  },
  {
    company: "Overactive, XPO Logistics",
    title: "Senior Frontend Engineer",
    period: "Jan 2019 – Oct 2021",
    stack: "Angular · AG-Grid · Internal tooling",
    highlights: [
      "Built data-intensive operations tools for the less-than-truckload (LTL) freight business: pickup and delivery management and route optimization, with large data grids synced to a live map.",
      "Contributed to the shared design system used by multiple teams; reviews, documentation and mentoring of junior engineers.",
    ],
  },
];

export function Experience(): JSX.Element {
  return (
    <>
      <Section id="experience" label="Experience">
        <ol className="space-y-12">
          {roles.map(
            ({ company, title, previousTitle, period, stack, highlights }) => (
              <li
                key={`${company}-${period}`}
                className="flex flex-col gap-2 lg:flex-row lg:gap-8"
              >
                <p className="shrink-0 pt-0.5 font-mono text-[0.8125rem] text-subtle lg:w-40">
                  {period}
                </p>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold">{company}</h3>
                  <p className="mt-0.5 text-muted">{title}</p>
                  {previousTitle && (
                    <p className="mt-0.5 text-muted">{previousTitle}</p>
                  )}
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-subtle">
                    {highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {stack && (
                    <p className="mt-4 font-mono text-[0.8125rem] leading-relaxed text-subtle">
                      {stack}
                    </p>
                  )}
                </div>
              </li>
            )
          )}
        </ol>

        <p className="mt-12 text-[0.9375rem] text-muted lg:ml-48">
          Earlier: Full Stack Engineer at BROS (2017–2018) and EDU Editorial
          (2014–2016); independent developer (2009–2014).
        </p>
      </Section>

      <Section id="side-project" label="Side project">
        <h3 className="text-lg font-semibold">
          Agent-driven development workflow
        </h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          A small project to test an end-to-end AI-agent workflow on a real use
          case: I wrote the PRDs and architecture and reviewed the output;
          Claude Code agents implemented it. The result is a simple WhatsApp
          reminder system (confirm or reschedule) used by a local clinic.
        </p>
        <p className="mt-4 font-mono text-[0.8125rem] leading-relaxed text-subtle">
          Next.js · Supabase / PostgreSQL · WhatsApp Business API · Claude Code
        </p>
        <a
          href="https://github.com/bradelev/vaig-scheduling"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block py-2 font-mono text-[0.9375rem] link"
        >
          github.com/bradelev/vaig-scheduling ↗
        </a>
      </Section>
    </>
  );
}
