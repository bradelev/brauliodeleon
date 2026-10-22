import { CV_PATH, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const links = [
  { href: CV_PATH, label: "Download CV ↗", external: true },
  { href: `mailto:${EMAIL}`, label: EMAIL },
  { href: GITHUB_URL, label: "GitHub", external: true },
  { href: LINKEDIN_URL, label: "LinkedIn", external: true },
];

export function Hero(): JSX.Element {
  return (
    <section className="max-w-3xl py-16 sm:py-24">
      <p className="font-mono text-sm text-accent">
        Montevideo, Uruguay · remote, US time zones
      </p>
      <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-[3.5rem]">
        Braulio De Leon
      </h1>
      <p className="mt-6 text-xl leading-snug text-muted sm:text-2xl">
        Senior / Staff Frontend Engineer. I build the flows where mistakes are
        expensive: payments, authentication and checkout.
      </p>
      <p className="mt-5 leading-relaxed text-muted sm:text-[1.0625rem]">
        15+ years on enterprise frontends for US companies, including American
        Express and Toyota. Most recently I owned the frontend of 3D Secure card
        authentication for the Amex travel platform.
      </p>
      <ul className="mt-6 flex flex-wrap gap-x-6 font-mono text-[0.9375rem]">
        {links.map(({ href, label, external }) => (
          <li key={href}>
            <a
              href={href}
              {...(external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="block py-2.5 link"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
