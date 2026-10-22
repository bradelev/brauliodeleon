type SectionProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

/** A home page section: mono label on the left, content on the right. */
export function Section({ id, label, children }: SectionProps): JSX.Element {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className="flex scroll-mt-8 flex-col gap-6 border-t border-border py-12 md:flex-row md:gap-12 md:py-16"
    >
      <h2
        id={`${id}-label`}
        className="shrink-0 font-mono text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-subtle md:w-44"
      >
        {label}
      </h2>
      <div className="min-w-0 flex-1">{children}</div>
    </section>
  );
}
