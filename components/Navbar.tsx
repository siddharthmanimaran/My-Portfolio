import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  {
    description: "Positioning, strengths, and the way I build products.",
    name: "About",
    route: "/",
  },
  {
    description: "How I work through delivery, iteration, and technical ownership.",
    name: "Experience",
    route: "/experience",
  },
  {
    description: "A clean snapshot of stack, workflow, and profile details.",
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
