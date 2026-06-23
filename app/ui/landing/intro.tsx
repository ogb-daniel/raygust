import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-[-100px] flex-1 min-h-screen px-28">
      <p className="uppercase rounded-2xl shadow w-fit py-2 px-3 flex items-center gap-4 section-header">
        Meet Raygust: For businesses and developers
        <ArrowRight className="text-accent" />
      </p>
      <h1 className="mt-10 text-6xl font-bold">Chat with any document</h1>
      <p className="mt-5 text-muted">
        Upload PDFs, Markdown, or web pages. Chat. Integrate in 3 lines of code.
      </p>
      <div className="flex items-center gap-4 mt-8">
        <Button
          variant="outline"
          className=" inline-flex items-center justify-center gap-2 px-4 py-6 text-sm font-semibold text-gray-900  border-gray-200 rounded-2xl border-2 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
        >
          Install SDK
          <div className="rounded-lg px-3 py-1 border-2 backdrop-blur-md  border-gray-100">
            <ArrowRight className="" />
          </div>
        </Button>

        <Button className="rounded-2xl font-semibold px-4 py-6 shadow-[inset_0_2px_1px_rgba(255,255,255,0.4),inset_2px_0_1px_rgba(255,255,255,0.3),inset_-2px_0_1px_rgba(255,255,255,0.3)]">
          Get Started
          <div className="rounded-lg px-3 py-1 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]  bg-white/10 backdrop-blur-md border-white/20">
            <ArrowRight className="" />
          </div>
        </Button>
      </div>
    </section>
  );
}
