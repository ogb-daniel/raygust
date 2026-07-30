import {
  CloudArrowUpIn,
  Thunderbolt,
  FileCode,
  Display,
  ClockArrowRotateLeft,
} from "@gravity-ui/icons";
import FeatureCard from "./feature-card";
import {
  UploadIllustration,
  StripeIllustration,
  CodeIllustration,
  ModelsIllustration,
  SearchIllustration,
} from "./illustrations";
import styles from "./features.module.css";
import clsx from "clsx";

const features = [
  {
    icon: <CloudArrowUpIn />,
    title: "Upload any document",
    description:
      "PDF, Markdown, or plain text. We automatically break it down and make it searchable.",
    illustration: <UploadIllustration />,
  },
  {
    icon: <Thunderbolt />,
    title: "Answers in seconds",
    description:
      "Ask a question in plain English and get precise answers pulled directly from your uploaded files.",
    illustration: <StripeIllustration />,
  },
  {
    icon: <FileCode />,
    title: "Integrate into your application",
    description: "Switch between Python or Typescript",
    illustration: <CodeIllustration />,
  },
  {
    icon: <Display />,
    title: "Chat playground",
    description: "Chat with your documents. No code required.",
    illustration: <ModelsIllustration />,
    wide: true,
  },
  {
    icon: <ClockArrowRotateLeft />,
    title: "Skip repetitive explanations",
    description:
      "Raygust remembers your context and preferences to work faster over time",
    illustration: <SearchIllustration />,
    wide: true,
  },
];

export default function Features() {
  return (
    <section
      className={clsx(styles.section, "px-6 md:px-12 lg:px-28 h-full py-28")}
    >
      <div className="features-header opacity-0 inline-block translate-y-[20px]">
        <span className="section-header">Key Features</span>
      </div>
      <h2 className={clsx(styles.heading, "features-title")}>
        Intuitive and easy to use
      </h2>
      <div className={styles.grid}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            illustration={feature.illustration}
            wide={feature.wide}
          />
        ))}
      </div>
    </section>
  );
}
