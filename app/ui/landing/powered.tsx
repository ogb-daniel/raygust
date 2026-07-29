import anthropicLogo from "@/public/anthropic_logo.svg";
import anthropicSymbol from "@/public/anthropic_symbol.svg";
import langchainLogo from "@/public/langchain_logo.svg";
import openaiLogo from "@/public/openai_logo.svg";
import openaiSymbol from "@/public/openai_symbol.svg";
import qdrantLogo from "@/public/qdrant_logo.svg";
import redisLogo from "@/public/redis_logo.svg";
import redisSymbol from "@/public/redis_symbol.svg";
import Icon from "./icon";
import React, { useImperativeHandle, useRef } from "react";

interface PoweredProps {
  ref?: React.Ref<{ height: number | undefined }>;
}

export default function Powered({ ref }: PoweredProps) {
  const poweredRef = useRef<HTMLElement>(null);
  useImperativeHandle(ref, () => {
    return {
      height: poweredRef.current?.offsetHeight,
    };
  }, []);
  return (
    <section
      ref={poweredRef}
      className="flex flex-col logo-item md:flex-row justify-between items-center gap-8 md:gap-6 px-6 md:px-12 lg:px-28 "
    >
      <p className="text-muted text-center md:text-left text-nowrap ">
        Powered by
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-5">
        <Icon src={anthropicLogo} alt="Anthropic" symbol={anthropicSymbol} />
        <Icon src={openaiLogo} alt="OpenAI" symbol={openaiSymbol} />
        <Icon src={langchainLogo} alt="LangChain" />
        <Icon src={qdrantLogo} alt="Qdrant" />
        <Icon src={redisLogo} alt="Redis" symbol={redisSymbol} />
      </div>
    </section>
  );
}
