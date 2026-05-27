const items = [
  'Marketing',
  'Brand Design',
  'Photography',
  'Web Design',
  'Creative Direction',
  'DJing',
  'Modeling',
  'Mongolia',
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <section className="border-y-[3px] border-ink bg-ink overflow-hidden py-3">
      <div className="flex marquee-track whitespace-nowrap items-center">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-playfair italic text-newsprint text-base lg:text-lg">
              {item}
            </span>
            <span className="text-vermillion text-xs">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
