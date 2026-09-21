"use client";
interface PasswordStrengthProps {
  password: string;
}
function getStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}
const SEGMENT_COLORS = ["bg-danger", "bg-warning", "bg-warning", "bg-success"];
const LABELS = ["", "Weak", "Fair", "Good", "Strong"];
export default function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = getStrength(password);
  if (!password) return null;
  return (
    <div className="flex flex-col gap-1.5 mt-2">
      <div className="flex gap-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
              i < strength ? SEGMENT_COLORS[strength - 1] : "bg-border"
            }`}
          />
        ))}
      </div>
      <p
        className={`text-xs ${
          strength <= 1
            ? "text-danger"
            : strength <= 3
              ? "text-warning"
              : "text-success"
        }`}
      >
        {LABELS[strength]}
      </p>
    </div>
  );
}
