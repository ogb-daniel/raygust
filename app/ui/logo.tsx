import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="font-semibold text-xl text-[#081410]"
      onClick={(e) => {
        if (window.location.pathname === "/") {
          e.preventDefault();
          window.dispatchEvent(
            new CustomEvent("navToStep", { detail: { step: 0 } })
          );
        }
      }}
    >
      Raygust
    </Link>
  );
}

export default Logo;
