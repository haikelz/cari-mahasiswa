import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center py-2 items-center">
      <div className="max-w-3xl w-full">
        <span className="text-sm">
          Dibangun oleh{" "}
          <Link
            href="https://github.com/haikelz"
            rel="noopener noreferrer"
            target="_blank"
            className="font-bold underline underline-offset-2"
          >
            Haikel
          </Link>
          , dengan ☕.
        </span>
      </div>
    </footer>
  );
}
