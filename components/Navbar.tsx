import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    description: "AI products, migrations, and the way I build enterprise web systems.",
    name: "About",
    route: "/",
  },
  {
    description: "Kloze.Ai, Casperon, and Confluxus — delivery ownership with measured outcomes.",
    name: "Experience",
    route: "/experience",
  },
  {
    description: "Stack, AI tooling, cloud workflow, and a direct path to the PDF resume.",
    name: "Resume",
    route: "/resume",
  },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const activeItem = navItems.find(({ route }) => route === pathname) ?? navItems[0];

  return (
    <header className="nav-shell transition-dark-mode">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-chip">Siddharth Manimaran</p>
          <h1 className="nav-title font-display">{activeItem.name}</h1>
          <p className="nav-description">{activeItem.description}</p>
        </div>

        <div className="nav-status-card">
          <span className="nav-status-dot" />
          Open to full-stack opportunities
        </div>
      </div>

      <nav aria-label="Primary navigation" className="nav-links-wrapper">
        {navItems.map(({ name, route }) => {
          const isActive = pathname === route;

          return (
            <Link className={`nav-link ${isActive ? "nav-link-active" : ""}`} href={route} key={route}>
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
