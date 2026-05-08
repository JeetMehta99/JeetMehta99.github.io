import React, { useMemo, useState } from "react";
import { portfolio } from "./data/portfolio.js";

function monthLabel(ym) {
  if (!ym) return "";
  if (ym === "Present") return "Present";
  const [y, m] = ym.split("-").map((n) => Number(n));
  if (!y || !m) return ym;
  const d = new Date(Date.UTC(y, m - 1, 1));
  return d.toLocaleString(undefined, { month: "short", year: "numeric", timeZone: "UTC" });
}

function setTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = t;
  try {
    localStorage.setItem("theme", t);
  } catch {
    // ignore
  }
}

function useTheme() {
  const [theme, set] = React.useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch {
      // ignore
    }
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  React.useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return { theme, setTheme: set };
}

function Icon({ name }) {
  const map = {
    github: "fab fa-github",
    linkedin: "fab fa-linkedin",
    mail: "fas fa-envelope",
    file: "fas fa-file-pdf",
    phone: "fas fa-phone",
    link: "fas fa-arrow-up-right-from-square",
    code: "fas fa-code",
    x: "fas fa-xmark",
    search: "fas fa-magnifying-glass",
    filter: "fas fa-sliders"
  };
  const cls = map[name] || "fas fa-link";
  return <i className={cls} aria-hidden="true" />;
}

function Tag({ children, active = false, onClick }) {
  return (
    <button className={active ? "tag tagActive" : "tag"} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function Modal({ open, title, onClose, children }) {
  React.useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modalOverlay" onMouseDown={onClose} role="presentation">
      <div className="modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modalHeader">
          <div className="modalTitle">{title}</div>
          <button className="iconBtn" onClick={onClose} type="button" aria-label="Close">
            <Icon name="x" />
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}

function Section({ id, title, children, right }) {
  return (
    <section id={id} className="section">
      <div className="sectionHeader">
        <h2 className="h2">{title}</h2>
        {right}
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const { theme, setTheme } = useTheme();

  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState(new Set());
  const [activeCompany, setActiveCompany] = useState("All");
  const [projectOpen, setProjectOpen] = useState(null);

  const allTags = useMemo(() => {
    const s = new Set();
    for (const p of portfolio.projects) for (const t of p.tags) s.add(t);
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  const companies = useMemo(() => {
    const s = new Set(portfolio.experience.map((e) => e.company));
    return ["All", ...Array.from(s)];
  }, []);

  const filteredProjects = useMemo(() => {
    const query = q.trim().toLowerCase();
    return portfolio.projects.filter((p) => {
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.oneLiner.toLowerCase().includes(query) ||
        p.details.toLowerCase().includes(query) ||
        p.tags.join(" ").toLowerCase().includes(query);
      const matchesTags =
        activeTags.size === 0 || p.tags.some((t) => activeTags.has(t));
      return matchesQuery && matchesTags;
    });
  }, [q, activeTags]);

  const filteredExperience = useMemo(() => {
    if (activeCompany === "All") return portfolio.experience;
    return portfolio.experience.filter((e) => e.company === activeCompany);
  }, [activeCompany]);

  function toggleTag(t) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }

  const openProject = projectOpen
    ? portfolio.projects.find((p) => p.name === projectOpen)
    : null;

  return (
    <div className="app">
      <header className="topbar">
        <div className="wrap topbarInner">
          <div className="brand">
            <div className="brandName">{portfolio.basics.name}</div>
            <div className="brandRole">{portfolio.basics.role}</div>
          </div>

          <nav className="nav" aria-label="Navigation">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <label className="themeToggle" title="Toggle theme">
              <input
                className="themeToggleInput"
                type="checkbox"
                checked={theme === "dark"}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                aria-label="Toggle dark mode"
              />
              <span className="themeToggleTrack" aria-hidden="true">
                <span className="themeToggleThumb" />
              </span>
            </label>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <div className="hero">
          <div className="heroMain enter">
            <h1 className="heroHeadline">{portfolio.basics.headline}</h1>
            <p className="sub">{portfolio.basics.summary}</p>
            <div className="pills">
              <a className="pill" href={portfolio.basics.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" />
                <span>LinkedIn</span>
              </a>
              <a className="pill" href={portfolio.basics.github} target="_blank" rel="noreferrer">
                <Icon name="github" />
                <span>GitHub</span>
              </a>
              <a className="pill" href={`mailto:${portfolio.basics.email}`}>
                <Icon name="mail" />
                <span>Email</span>
              </a>
              <a className="pill" href={`tel:${portfolio.basics.phone.replace(/[^0-9+]/g, "")}`}>
                <Icon name="phone" />
                <span>{portfolio.basics.phone}</span>
              </a>
              <a className="pill" href={portfolio.basics.resume} target="_blank" rel="noreferrer">
                <Icon name="file" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        <Section
          id="experience"
          title="Experience"
          right={
            <div className="controls">
              <select
                className="select"
                value={activeCompany}
                onChange={(e) => setActiveCompany(e.target.value)}
                aria-label="Filter by company"
              >
                {companies.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          }
        >
          <div className="cards">
            {filteredExperience.map((e) => (
              <details className="card" key={`${e.company}-${e.start}`} open>
                <summary className="cardSummary">
                  <div className="cardTitle">
                    {e.logo ? (
                      <img className="coLogo" src={e.logo} alt="" aria-hidden="true" />
                    ) : (
                      <span className="coMark" aria-hidden="true">
                        {e.company
                          .split(" ")
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    )}
                    <span className="cardTitleText">
                      {e.title} · {e.company}
                    </span>
                  </div>
                  <div className="muted">
                    {e.location} · {monthLabel(e.start)} - {e.end === "Present" ? "Present" : monthLabel(e.end)}
                  </div>
                </summary>
                <div className="cardBody">
                  <div className="tagRow compact">
                    {e.stack.slice(0, 10).map((t) => (
                      <span className="pillTag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="bullets">
                    {e.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </Section>

        <Section
          id="work"
          title="Selected Work"
          right={
            <div className="controls">
              <div className="search">
                <Icon name="search" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search projects..."
                  aria-label="Search projects"
                />
              </div>
              <button
                className="iconBtn"
                type="button"
                onClick={() => setActiveTags(new Set())}
                title="Clear filters"
                aria-label="Clear filters"
              >
                <Icon name="filter" />
              </button>
            </div>
          }
        >
          <div className="tagRow" aria-label="Project filters">
            {allTags.map((t) => (
              <Tag key={t} active={activeTags.has(t)} onClick={() => toggleTag(t)}>
                {t}
              </Tag>
            ))}
          </div>

          <div className="projects">
            {filteredProjects.map((p) => (
              <article className="project" key={p.name}>
                <button className="projectMedia" type="button" onClick={() => setProjectOpen(p.name)}>
                  <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
                </button>
                <div className="projectBody">
                  <div className="projectHeader">
                    <div className="projectTitle">{p.name}</div>
                    <div className="projectActions">
                      <a className="linkBtn" href={p.repo} target="_blank" rel="noreferrer">
                        <Icon name="code" />
                        <span>Code</span>
                      </a>
                      <a className="linkBtn" href={p.href} target="_blank" rel="noreferrer">
                        <Icon name="link" />
                        <span>Live</span>
                      </a>
                    </div>
                  </div>
                  <div className="muted">{p.oneLiner}</div>
                  <div className="tagRow compact">
                    {p.tags.map((t) => (
                      <span className="pillTag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <div className="grid2">
          <Section id="skills" title="Skills">
            <div className="skillGrid">
              {Object.entries(portfolio.skills).map(([k, v]) => (
                <div className="skillBlock" key={k}>
                  <div className="skillTitle">{k.replace(/([A-Z])/g, " $1")}</div>
                  <div className="skillTags">
                    {v.map((s) => (
                      <span className="pillTag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="education" title="Education">
            <div className="list">
              {portfolio.education.map((ed) => (
                <div className="listItem" key={ed.degree}>
                  <div className="row2">
                    <div className="strong">{ed.degree}</div>
                    <div className="muted">{monthLabel(ed.end)}</div>
                  </div>
                  <div className="muted">
                    {ed.school} · {ed.location}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <footer className="footer">
          <div className="muted">
            Built as an interactive single-page app. Deploys as a static build to GitHub Pages.
          </div>
        </footer>
      </main>

      <Modal open={!!openProject} title={openProject?.name || ""} onClose={() => setProjectOpen(null)}>
        {openProject ? (
          <div className="modalProject">
            <img className="modalImg" src={openProject.image} alt={`${openProject.name} screenshot`} />
            <div className="modalText">
              <div className="muted">{openProject.details}</div>
              <div className="modalActions">
                <a className="pill" href={openProject.repo} target="_blank" rel="noreferrer">
                  <Icon name="code" />
                  <span>Code</span>
                </a>
                <a className="pill" href={openProject.href} target="_blank" rel="noreferrer">
                  <Icon name="link" />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
