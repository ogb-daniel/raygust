import {
  CloudArrowUpIn,
  SquareDashedLetterT,
  CurlyBrackets,
  Gear,
  CircleLetterI,
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
    title: "Upload everything at once",
    description:
      "No batching, no limits, no waiting. Raygust supports larger files compared to others",
    illustration: <UploadIllustration />,
  },
  {
    icon: <SquareDashedLetterT />,
    title: "Start in seconds, not hours",
    description: "Turn your data into clear visuals that explain your findings",
    illustration: <StripeIllustration />,
  },
  {
    icon: <CurlyBrackets />,
    title: "Code when you want to",
    description: "Switch to R, Python, or SQL anytime for advanced work",
    illustration: <CodeIllustration />,
  },
  {
    icon: <Gear />,
    title: "Tackle problems generic AI can't",
    description:
      "Built with advanced capabilities to solve complex data analysis problems",
    illustration: <ModelsIllustration />,
    wide: true,
  },
  {
    icon: <CircleLetterI />,
    title: "Skip repetitive explanations",
    description:
      "Raygust remembers your context and preferences to work faster over time",
    illustration: <SearchIllustration />,
    wide: true,
  },
];

export default function Features() {
  return (
    <section className={clsx(styles.section, "")}>
      <span className={styles.badge}>Key Features</span>
      <h2 className={styles.heading}>Intuitive and easy to use</h2>
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
