import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-muted">
        It may have moved, or the post may be unpublished.
      </p>
      <Link
        href="/"
        className="link mt-8 inline-block py-2 font-mono text-[0.9375rem]"
      >
        ← back home
      </Link>
    </div>
  );
}
