"use client";

import {
  useRef,
  useState,
  type KeyboardEvent,
  type ClipboardEvent,
} from "react";

interface OtpInputProps {
  length?: number;
  onComplete?: (code: string) => void;
}

export default function OtpInput({ length = 4, onComplete }: OtpInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const newValues = [...values];
    newValues[index] = digit;
    setValues(newValues);

    if (digit && index < length - 1) {
      focusInput(index + 1);
    }

    const code = newValues.join("");
    if (code.length === length && !newValues.includes("")) {
      onComplete?.(code);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      focusInput(index - 1);
      const newValues = [...values];
      newValues[index - 1] = "";
      setValues(newValues);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (pasted) {
      const newValues = [...values];
      for (let i = 0; i < pasted.length; i++) {
        newValues[i] = pasted[i];
      }
      setValues(newValues);

      const nextEmpty = newValues.findIndex((v) => !v);
      focusInput(nextEmpty === -1 ? length - 1 : nextEmpty);

      if (pasted.length === length) {
        onComplete?.(pasted);
      }
    }
  };

  return (
    <div className="flex gap-3 justify-center">
      {values.map((value, i) => (
        <input
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={i === 0 ? handlePaste : undefined}
          className="w-14 h-16 text-center text-2xl font-semibold
            border-2 border-border rounded-(--radius-small)
            bg-(--field-background) text-foreground
            outline-none transition-all duration-150
            focus:border-accent focus:ring-2 focus:ring-accent/20"
          autoFocus={i === 0}
        />
      ))}
    </div>
  );
}
