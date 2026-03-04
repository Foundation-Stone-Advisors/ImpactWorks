import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-text text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="ImpactWorks"
            width={140}
            height={32}
            className="mx-auto"
          />
        </Link>
        <p className="text-sm text-gray-400 mt-2">
          Mission-Driven. Systems-Powered. Kingdom-Focused.
        </p>
        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} ImpactWorks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
