import anthropicLogo from "@/public/anthropic_logo.svg";
import anthropicSymbol from "@/public/anthropic_symbol.svg";
import langchainLogo from "@/public/langchain_logo.svg";
import openaiLogo from "@/public/openai_logo.svg";
import openaiSymbol from "@/public/openai_symbol.svg";
import qdrantLogo from "@/public/qdrant_logo.svg";
import redisLogo from "@/public/redis_logo.svg";
import redisSymbol from "@/public/redis_symbol.svg";
import Icon from "./icon";

export default function Powered() {
  return (
    <section className="flex justify-between items-center px-28 py-24">
      <p className="text-muted">Powered by</p>
      <div className=" flex gap-32 items-center">
        <Icon src={anthropicLogo} alt="Anthropic" symbol={anthropicSymbol} />
        <Icon src={openaiLogo} alt="OpenAI" symbol={openaiSymbol} />
        <Icon src={langchainLogo} alt="LangChain" />
        <Icon src={qdrantLogo} alt="Qdrant" />
        <Icon src={redisLogo} alt="Redis" symbol={redisSymbol} />
      </div>
    </section>
  );
}
