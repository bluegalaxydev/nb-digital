import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-8xl font-extrabold text-blue-100">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
          >
            Back to Home
          </Link>
          <Link
            href="/#services"
            className="rounded-xl border-1.5 border-blue-200 bg-blue-50/60 px-8 py-3.5 text-base font-semibold text-blue-700 transition hover:bg-blue-100/60"
          >
            View Services
          </Link>
        </div>
      </div>
    </main>
  );
}
