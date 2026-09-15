"use client";

import type { InputHTMLAttributes, Ref } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

const AuthInput = ({
  label,
  error,
  id,
  className = "",
  ref,
  ...props
}: AuthInputProps) => {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium text-foreground">
        {label}
        {props.required && <span className="text-danger ml-0.5">*</span>}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={`
          w-full px-3.5 py-2.5 rounded-(--radius-small)
          bg-(--field-background) text-(--field-foreground)
          placeholder:text-(--field-placeholder)
          border border-border
          outline-none transition-all duration-150
          focus:border-accent focus:ring-2 focus:ring-accent/20
          ${error ? "border-danger focus:border-danger focus:ring-danger/20" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-xs text-danger mt-0.5">{error}</p>}
    </div>
  );
};

export default AuthInput;
