import Link from "next/link";

type SocialLink = {
  href: string;
  label: string;
  external?: boolean;
};

const socialLinks: SocialLink[] = [
  { href: "https://github.com/bradelev", label: "GitHub", external: true },
  { href: "https://linkedin.com/in/brauliodeleon", label: "LinkedIn", external: true },
  { href: "mailto:hi@brauliodeleon.com", label: "Email" },
];

export function Footer(): JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            © {currentYear} Braulio De Leon. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, label, external }) => (
              <Link
                key={href}
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
