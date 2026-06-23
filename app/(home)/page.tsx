import Intro from "../ui/landing/intro";
import Features from "../ui/features/features";
import Works from "../ui/works/works";
import Powered from "../ui/powered";
import BuiltFor from "../ui/built-for/built-for";
import Pricing from "../ui/pricing/pricing";
import Testimonials from "../ui/testimonials/testimonials";
import FAQ from "../ui/faq/faq";

export default function HomePage() {
  return (
    <div>
      <Intro />
      <Powered />
      <Features />
      <Works />
      <BuiltFor />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
    </div>
  );
}
