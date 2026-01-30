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
          <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            <p>
              I&apos;m a Senior Frontend Engineer and Head of Engineering at Arionkoder,
              with over 10 years of experience building and maintaining enterprise-scale
              web applications. Currently, I work hands-on in production systems for
              high-profile clients, combining technical excellence with leadership
              responsibilities in a remote-first environment.
            </p>

            <p>
              My technical expertise spans React and Angular ecosystems, with a strong
              focus on complex user flows, accessibility, and incremental delivery using
              feature flags. I&apos;ve worked on enterprise platforms for companies like
              American Express and Toyota, where I&apos;ve led frontend stabilization
              efforts, significantly reduced production errors, and established coding
              standards that improved overall code quality.
            </p>

            <p>
              I believe in writing clean, maintainable code while fostering cultures of
              continuous improvement. Whether I&apos;m mentoring engineers, conducting code
              reviews, or implementing new features, my goal is always to deliver quality
              software that provides real value to users and sets teams up for long-term success.
            </p>
          </div>

          {/* Optional: Skills Highlight */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Areas of Expertise
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Frontend Development
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  React, Angular, TypeScript, JavaScript (ES6+)
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Enterprise Applications
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Complex Forms, Feature Flags, Accessibility (a11y)
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Technical Leadership
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Team Building, Mentoring, Code Review, Best Practices
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Quality & Stabilization
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Error Reduction, Code Quality, Frontend Optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
