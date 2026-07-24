import { type ReactNode } from "react";
import styles from "./features.module.css";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  illustration: ReactNode;
  wide?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  illustration,
  wide = false,
}: FeatureCardProps) {
  return (
    <div className={wide ? styles.cardWide : styles.card}>
      <div className={styles.illustration}>{illustration}</div>
      <div className={styles.body}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
