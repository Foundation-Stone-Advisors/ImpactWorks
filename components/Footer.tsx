export default function Footer() {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-bold text-lg">
          Impact<span className="text-gold">Works</span>
        </p>
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
