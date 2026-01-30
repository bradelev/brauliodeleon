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
              I&apos;m a software engineer and technology leader with over a decade
              of experience building scalable web applications and leading
              high-performing engineering teams. My passion lies in creating
              elegant solutions to complex problems and fostering cultures of
              innovation and continuous improvement.
            </p>

            <p>
              Throughout my career, I&apos;ve worked across the full stack,
              specializing in modern web technologies like React, Next.js,
              TypeScript, and Node.js. I believe in writing clean, maintainable
              code that stands the test of time, and I&apos;m always exploring new
              tools and patterns that can improve developer experience and
              product quality.
            </p>

            <p>
              When I&apos;m not coding, you&apos;ll find me mentoring junior developers,
              contributing to open-source projects, or writing about software
              engineering best practices. I&apos;m particularly interested in
              developer tooling, AI-assisted development, and the intersection
              of technology and human-centered design.
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
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Backend Development
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Node.js, APIs, Databases, Cloud Infrastructure
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Technical Leadership
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Team Building, Architecture, Code Review, Mentoring
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  Developer Experience
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Tooling, CI/CD, Best Practices, Documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
