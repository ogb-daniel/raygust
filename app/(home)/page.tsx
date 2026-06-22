import Intro from "../ui/landing/intro";
import Features from "../ui/features/features";
import Works from "../ui/works/works";
import Powered from "../ui/powered";
import BuiltFor from "../ui/built-for/built-for";

export default function HomePage() {
  return (
    <div>
      <Intro />
      <Powered />
      <Features />
      <Works />
      <BuiltFor />
    </div>
  );
}
