export default function Stats() {
  const stats = [
    { value: "42", label: "EPISODIOS", color: "text-cyan-400" },
    { value: "15K", label: "OYENTES", color: "text-yellow-400" },
    { value: "4.9", label: "RATING", color: "text-green-400" },
  ];

  return (
    <section
      className="my-auto grid grid-cols-3 gap-4 text-center"
      aria-label="Estadísticas del podcast"
    >
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className={`${
            idx < stats.length - 1 ? "border-r border-[#790063] pr-4" : ""
          }`}
        >
          <div
            className={`text-2xl font-bold tracking-wider md:text-3xl ${stat.color}`}
          >
            {stat.value}
          </div>
          <div className="text-sm tracking-wider text-purple-200 md:text-base">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
