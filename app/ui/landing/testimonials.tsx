const testimonials = [
  {
    name: "Alex Chen",
    handle: "@alexchendev",
    quote:
      "Integrated @RAGPlatform into our support bot in an afternoon. 3 lines of Python and our entire help center is AI-searchable.",
    avatar: "AC",
  },
  {
    name: "Sarah Martinez",
    handle: "@sarahbuilds",
    quote:
      "The multi-LLM fallback is genius. OpenAI went down and our users didn't even notice",
    avatar: "SM",
  },
  {
    name: "David Okafor",
    handle: "@davidokafor",
    quote:
      "Our HR team uploaded the employee handbook and now everyone can just ask questions instead of digging through 200 pages. Game changer.",
    avatar: "DO",
  },
  {
    name: "Priya Sharma",
    handle: "@priyasharmaai",
    quote:
      "We set up isolated knowledge bases for each of our consulting clients in minutes. The multi-tenant setup just works.",
    avatar: "PS",
  },
  {
    name: "Marcus Lee",
    handle: "@marcuslee_",
    quote:
      "I'm not a developer. I just uploaded our docs through the dashboard and started chatting. It actually understood everything.",
    avatar: "ML",
  },
  {
    name: "Emily Rogers",
    handle: "@emrogers",
    quote:
      "The dashboard is clean and the SDK is even cleaner. client.chat.send() and you're done. Best developer experience I've seen for RAG.",
    avatar: "ER",
  },
  {
    name: "James Wilson",
    handle: "@jameswilson",
    quote:
      "Switched from building our own RAG pipeline to using Raygust. Saved us 3 months of engineering time and the results are better.",
    avatar: "JW",
  },
  {
    name: "Nina Patel",
    handle: "@ninapatel",
    quote:
      "The chunking and embedding is handled automatically. I just upload and query. No ML expertise needed.",
    avatar: "NP",
  },
  {
    name: "Carlos Rivera",
    handle: "@carlosdev",
    quote:
      "We use it for our internal docs. New engineers get answers in seconds instead of asking the same questions in Slack.",
    avatar: "CR",
  },
];

// Distribute testimonials into 3 columns for masonry layout
const columns: (typeof testimonials)[] = [[], [], []];
testimonials.forEach((t, i) => {
  columns[i % 3].push(t);
});

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)]">
      {/* Author info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-xs text-gray-400">{testimonial.handle}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        {testimonial.quote}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-white px-28">
      <div className="flex flex-col items-center text-center">
        {/* Section label */}
        <span className="section-header">Testimonials</span>

        {/* Headline */}
        <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15]">
          Loved by teams and <span className="text-accent">builders</span>{" "}
          everywhere
        </h2>
      </div>

      {/* Masonry Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-5">
            {column.map((testimonial) => (
              <TestimonialCard
                key={testimonial.handle}
                testimonial={testimonial}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
