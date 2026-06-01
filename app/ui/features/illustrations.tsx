import styles from "./features.module.css";

/* ---- Upload Illustration ---- */
export function UploadIllustration() {
  return (
    <div className={styles.uploadVisual}>
      <div className={styles.uploadCard}>
        <div className={styles.uploadThumbnail} />
        <span>Upload</span>
      </div>
      <div className={styles.uploadCard}>
        <div className={styles.uploadThumbnailAlt} />
      </div>
    </div>
  );
}

/* ---- Stripe / Speed Illustration ---- */
export function StripeIllustration() {
  const widths = [90, 110, 130, 115, 95, 120, 100, 85, 125, 105, 88, 118];
  return (
    <div className={styles.stripeVisual}>
      {widths.map((w, i) => (
        <div
          key={i}
          className={styles.stripeLine}
          style={{
            width: `${w}px`,
            opacity: 0.3 + (i / widths.length) * 0.5,
          }}
        />
      ))}
    </div>
  );
}

/* ---- Code Illustration ---- */
export function CodeIllustration() {
  return (
    <div className={styles.codeVisual}>
      <div className={styles.codeHeader}>
        <span className={styles.codeBadge}>Upload</span>
      </div>
      <div className={styles.codeLine}>
        <span className={styles.codeKeyword}>{"const "}</span>
        <span className={styles.codeFn}>{"GetStatus"}</span>
        <span className={styles.codePunct}>{"("}</span>
        <span className={styles.codeType}>{"Scanner"}</span>
        <span className={styles.codePunct}>{": "}</span>
        <span className={styles.codeType}>{"String"}</span>
        <span className={styles.codePunct}>{")"}</span>
      </div>
      <div className={styles.codeLine}>
        <span className={styles.codePunct}>{"  "}</span>
        <span className={styles.codeKeyword}>{"Params"}</span>
        <span className={styles.codePunct}>{": "}</span>
        <span className={styles.codeString}>{"String("}</span>
      </div>
      <div className={styles.codeLine}>
        <span className={styles.codePunct}>{"    "}</span>
        <span className={styles.codeFn}>{"TransferKey"}</span>
        <span className={styles.codePunct}>{": "}</span>
        <span className={styles.codeType}>{"OPEN"}</span>
        <span className={styles.codePunct}>{","}</span>
      </div>
      <div className={styles.codeLine}>
        <span className={styles.codePunct}>{"    "}</span>
        <span className={styles.codeFn}>{"Connection"}</span>
        <span className={styles.codePunct}>{": "}</span>
        <span className={styles.codeNum}>{"1024"}</span>
        <span className={styles.codePunct}>{")"}</span>
      </div>
    </div>
  );
}

/* ---- Models / Chart Illustration ---- */
export function ModelsIllustration() {
  const models = [
    { name: "Joker", color: "#e74c3c" },
    { name: "Panther", color: "#2ecc71" },
    { name: "Skull", color: "#3498db" },
  ];

  return (
    <div className={styles.modelsVisual}>
      <div className={styles.modelsHeader}>
        <span className={styles.modelsTabActive}>Models</span>
        <span className={styles.modelsTabInactive}>Validation</span>
      </div>
      <div className={styles.modelsList}>
        {models.map((model) => (
          <div key={model.name} className={styles.modelChip}>
            <span
              className={styles.modelDot}
              style={{ background: model.color }}
            />
            {model.name}
          </div>
        ))}
      </div>
      <div className={styles.chartArea}>
        <div className={styles.chartGradient} />
        <div className={styles.chartLine}>
          <svg
            className={styles.chartLineSvg}
            viewBox="0 0 300 60"
            preserveAspectRatio="none"
          >
            <path
              className={styles.chartLinePath}
              d="M0,55 C15,48 30,42 50,38 C70,34 85,30 105,25 C125,20 140,22 160,18 C180,14 195,20 215,12 C235,4 250,8 270,5 C285,3 295,6 300,4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---- Search Illustration ---- */
export function SearchIllustration() {
  return (
    <div className={styles.searchVisual}>
      <div className={styles.searchIcon}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <span className={styles.searchText}>
        Which table can I use to find my customer dem
      </span>
      <div className={styles.searchCursor} />
    </div>
  );
}
