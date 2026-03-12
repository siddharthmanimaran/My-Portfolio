import type { IconType } from "react-icons";
import { FaUserTie } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiPhoneCall,
  FiSun,
} from "react-icons/fi";
import Image from "next/image";
import useResumeAvailability from "./useResumeAvailability";

interface Props {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const contactItems: {
  id: string;
  label: string;
  value: string;
  href: string;
  Icon: IconType;
}[] = [
  {
    id: "location",
    label: "Location",
    value: "Chennai, Tamil Nadu",
    href: "https://maps.google.com/?q=Chennai,Tamil%20Nadu",
    Icon: FiMapPin,
  },
  {
    id: "email",
    label: "Email",
    value: "siddharth.goldengrove@gmail.com",
    href: "mailto:siddharth.goldengrove@gmail.com",
    Icon: FiMail,
  },
  {
    id: "phone",
    label: "Phone",
    value: "+91 86673 85532",
    href: "tel:+918667385532",
    Icon: FiPhoneCall,
  },
];

const socialItems: {
  id: string;
  label: string;
  href: string;
  Icon: IconType;
}[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/siddharthmanimaran",
    Icon: FiGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/siddharth-manimaran-2b8994217",
    Icon: FiLinkedin,
  },
];

const Sidebar = ({ toggleDarkMode, darkMode }: Props) => {
  const { isChecking, isResumeAvailable, resumePath } = useResumeAvailability();

  return (
    <aside className="sidebar-shell h-full px-6 py-6 text-left text-gray-900 dark:text-gray-100">
      <div aria-hidden="true" className="sidebar-grid" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="sidebar-label">Portfolio Capsule</p>
            <p className="sidebar-microcopy">Reliable shipping with a forward-looking UI mindset.</p>
          </div>
          <button
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="sidebar-toggle"
            onClick={toggleDarkMode}
            type="button"
          >
            {darkMode ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center text-center">
          <div className="sidebar-avatar-ring">
            <div className="sidebar-avatar-frame">
              <Image
                alt="Portrait of Siddharth Manimaran"
                className="rounded-2xl"
                height={132}
                objectFit="cover"
                src="/me-light.webp"
                width={132}
              />
            </div>
          </div>

          <div className="sidebar-availability mt-5">
            <span className="sidebar-availability-dot" />
            Available for full-stack roles
          </div>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Siddharth
            <span className="block font-kaushan text-green-500 dark:text-Purple">Manimaran</span>
          </h3>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
            Full-stack developer focused on polished frontends, resilient APIs, and product experiences that feel modern without sacrificing clarity.
          </p>
        </div>

        <div className="mt-8 grid gap-3">
          <section className="sidebar-panel">
            <p className="sidebar-panel-title">Current Focus</p>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="sidebar-icon-chip">
                  <FaUserTie className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Full-Stack Engineer</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">React, Next.js, Node.js, and scalable web delivery</p>
                </div>
              </div>
              <span className="sidebar-metric">3+ yrs</span>
            </div>
          </section>

          <section className="sidebar-panel">
            <p className="sidebar-panel-title">Direct Contact</p>
            <div className="space-y-3">
              {contactItems.map(({ id, label, value, href, Icon }) => (
                <a
                  className="sidebar-contact-link"
                  href={href}
                  key={id}
                >
                  <span className="sidebar-icon-chip">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{label}</span>
                    <span className="block truncate text-sm font-medium text-gray-900 dark:text-gray-100">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="sidebar-panel">
            <p className="sidebar-panel-title">Network</p>
            <div className="grid grid-cols-2 gap-3">
              {socialItems.map(({ id, label, href, Icon }) => (
                <a
                  className="sidebar-social-link"
                  href={href}
                  key={id}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 grid gap-3 md:mt-auto">
          {isResumeAvailable ? (
            <a className="sidebar-cta sidebar-cta-primary" download="Siddharth.pdf" href={resumePath}>
              <span className="flex items-center gap-2">
                <FiDownload className="h-4 w-4" />
                Download Resume
              </span>
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <a
              className="sidebar-cta sidebar-cta-primary"
              href="mailto:siddharth.goldengrove@gmail.com?subject=Requesting%20Resume"
            >
              <span className="flex items-center gap-2">
                <FiMail className="h-4 w-4" />
                Request Resume
              </span>
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          )}

          <a className="sidebar-cta sidebar-cta-secondary" href="mailto:siddharth.goldengrove@gmail.com">
            <span className="flex items-center gap-2">
              <FiMail className="h-4 w-4" />
              Start a Conversation
            </span>
            <FiArrowUpRight className="h-4 w-4" />
          </a>

          <p className="sidebar-support-copy">
            {isChecking
              ? "Checking whether the resume PDF is available."
              : isResumeAvailable
                ? "A direct PDF download is available from the portfolio."
                : "No local PDF was found, so resume requests currently route through email."}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
