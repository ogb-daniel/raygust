import Intro from "../ui/landing/intro";
import Features from "../ui/features/features";
import Works from "../ui/works/works";
import Powered from "../ui/powered";

export default function HomePage() {
  return (
    <div>
      <Intro />
      <Powered />
      <Features />
      <Works />
    </div>
  );
}
