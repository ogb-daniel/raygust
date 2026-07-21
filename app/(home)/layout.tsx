import Navbar from "../ui/navbar";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <main className="">
      <div className="absolute layout-bg left-2 right-2 md:left-5 md:right-5 rounded-b-3xl bottom-16 top-0 bg-linear-to-t from-accent to-60% to-white"></div>
      <div className="absolute layout-bg left-2 right-2 md:left-5 md:right-5 top-0 bottom-16 rounded-b-3xl bg-[oklch(0.75_0.07_175)] curved-bottom"></div>
      <div className="absolute layout-bg left-2 right-2 md:left-5 md:right-5 border rounded-b-3xl bottom-16 top-0 grid-pattern border-accent" />
      <div className="absolute layout-bg left-2 right-2 md:left-5 md:right-5 rounded-b-3xl bottom-16 top-0 bg-radial-[circle] from-white"></div>
      <div className="absolute layout-bg inset-0 bg-linear-to-b from-white "></div>
      <div className="relative z-10  ">
        <Navbar />
        <section className="">{children}</section>
      </div>
    </main>
  );
}
