import { Section } from "@/components/Section";
import { CV_PATH, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const contactLinks = [
  { label: "email", href: `mailto:${EMAIL}`, text: EMAIL },
  {
    label: "linkedin",
    href: LINKEDIN_URL,
    text: "in/brauliodeleon",
    external: true,
  },
  { label: "github", href: GITHUB_URL, text: "bradelev", external: true },
  {
    label: "cv",
    href: CV_PATH,
    text: "braulio-de-leon-cv.pdf",
    external: true,
  },
];

export function Contact(): JSX.Element {
  return (
    <Section id="contact" label="Contact">
      <p className="max-w-2xl text-xl leading-snug sm:text-2xl">
        I&apos;m looking for a senior or staff-level, hands-on frontend role
        with a remote US team. If that sounds like your team, I&apos;d like to
        hear from you.
      </p>
      <dl className="mt-8 grid gap-x-8 gap-y-3 font-mono text-[0.9375rem] sm:grid-cols-[6rem_1fr]">
        {contactLinks.map(({ label, href, text, external }) => (
          <div key={label} className="contents">
            <dt className="text-subtle sm:py-1">{label}</dt>
            <dd className="-mt-2 sm:mt-0">
              <a
                href={href}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="link inline-block py-1"
              >
                {text}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
