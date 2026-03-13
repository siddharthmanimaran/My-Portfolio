import { useState, useEffect } from "react";
import { FiDownload, FiMail, FiX } from "react-icons/fi";
import useResumeAvailability from "./useResumeAvailability";

export default function FloatingDoll() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const { isResumeAvailable, resumePath } = useResumeAvailability();

  // Slide in from bottom after a short delay
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`doll-root${visible ? " doll-root--visible" : ""}`}>
      {/* Pop-up card */}
      <div
        aria-hidden={!open}
        className={`doll-panel${open ? " doll-panel--open" : ""}`}
      >
        {/* Close button */}
        <button
          aria-label="Close"
          className="doll-close"
          onClick={() => setOpen(false)}
        >
          <FiX size={14} />
        </button>

        {/* Doll mini face inside card */}
        <div className="doll-card-face" aria-hidden="true">
          <div className="doll-card-eye doll-card-eye--left" />
          <div className="doll-card-eye doll-card-eye--right" />
          <div className="doll-card-mouth" />
        </div>

        <p className="doll-greeting">Hey there! 👋</p>
        <p className="doll-sub">What can I help you with?</p>

        <div className="doll-actions">
          {isResumeAvailable ? (
            <a
              className="doll-btn doll-btn--primary"
              download
              href={resumePath}
            >
              <FiDownload size={15} />
              <span>Download Resume</span>
            </a>
          ) : (
            <a
              className="doll-btn doll-btn--primary"
              href="mailto:siddharth.goldengrove@gmail.com?subject=Requesting%20Resume"
            >
              <FiDownload size={15} />
              <span>Request Resume</span>
            </a>
          )}
          <a
            className="doll-btn doll-btn--secondary"
            href="mailto:siddharth.goldengrove@gmail.com"
          >
            <FiMail size={15} />
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      {/* The doll trigger button */}
      <button
        aria-label={open ? "Close assistant" : "Open assistant"}
        className={`doll-trigger${open ? " doll-trigger--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        {/* CSS-drawn face */}
        <span className="doll-face" aria-hidden="true">
          <span className="doll-eye doll-eye--left" />
          <span className="doll-eye doll-eye--right" />
          <span className="doll-smile" />
        </span>

        {/* Notification badge when closed */}
        {!open && visible && (
          <span className="doll-badge" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
