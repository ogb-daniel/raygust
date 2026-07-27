import Link from "next/link";
import { Button } from "@heroui/react";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 rounded-full">
        Coming Soon
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
        {title}
      </h1>
      <p className="text-gray-500 max-w-md mb-8">
        We're working hard to bring you this page. Check back soon for updates!
      </p>
      <Link href="/">
        <Button
          variant="outline"
          className="inline-flex items-center justify-center gap-2 px-6 py-6 text-sm font-semibold text-gray-900 bg-white border-gray-200 rounded-2xl border-2 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
