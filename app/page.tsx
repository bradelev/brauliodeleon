import { Example } from "@/components/Example";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-center p-24"
      )}
    >
      <h1 className="text-4xl font-bold">Braulio De Leon</h1>
      <p className="mt-4 text-xl text-gray-600">
        Building the digital future, one line of code at a time
      </p>
      <Example />
    </main>
  );
}
