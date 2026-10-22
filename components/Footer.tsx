import { SOURCE_URL } from "@/lib/site";

export function Footer(): JSX.Element {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6">
      <div className="flex flex-col gap-2 border-t border-border py-8 font-mono text-[0.8125rem] text-subtle sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Braulio De Leon</p>
        <p>
          Next.js, statically rendered ·{" "}
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
