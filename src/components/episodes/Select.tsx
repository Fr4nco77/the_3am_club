import { useState } from "react";

export default function Select({
  currentCategory,
  categories,
}: {
  currentCategory?: string;
  categories: string[];
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex h-10 min-w-[160px] items-center justify-between rounded-[8px] border border-purple-500/50 bg-black/60 px-3 text-sm text-white transition-colors hover:border-cyan-400"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span>{currentCategory?.toUpperCase() ?? "TODAS LAS CATEGORÍAS"}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-300 ease-in-out ${isMenuOpen && "rotate-180"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <>
          {/* Dropdown Overlay */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 z-40 mt-1 w-full overflow-hidden rounded-[8px] border border-purple-500/50 bg-black/90 shadow-2xl backdrop-blur-sm">
            <a
              href="/episodes/1"
              className="block border-b border-purple-500/20 px-3 py-2 text-sm text-white transition-colors last:border-b-0 hover:bg-purple-500/20 hover:text-cyan-400"
            >
              TODAS LAS CATEGORÍAS
            </a>
            {categories.map((category) => (
              <a
                key={category}
                href={`/episodes/${category}/1`}
                className="block border-b border-purple-500/20 px-3 py-2 text-sm text-white transition-colors last:border-b-0 hover:bg-purple-500/20 hover:text-cyan-400"
              >
                {category.toUpperCase()}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
