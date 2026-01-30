import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-gray-600">
            Braulio De Leon
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
