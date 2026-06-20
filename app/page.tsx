"use client";

import { useEffect } from "react";
import Logo from "./Logo";

const ACCENT = "#2e5a44";
const pillars = ["Biofuel", "SAF", "Circular Economy", "Net-Zero 2050"];

const services = [
  { name: "FAME Biofuel", sector: "Produce", text: "A 250,000-tonne/yr FAME (Fatty Acid Methyl Ester) facility at Kuantan port — clean fuel at industrial scale." },
  { name: "Sustainable Aviation Fuel", sector: "Develop", text: "A Sustainable Aviation Fuel plant in development, with long-term offtake potential across ASEAN aviation." },
  { name: "Resource Recovery", sector: "Recover", text: "Circular-economy solutions that turn recovered materials into lasting value for industry and the environment." }
];

const values = [
  { label: "National Alignment", text: "Directly aligned with the National Energy Transition Roadmap (NETR) and Malaysia's net-zero 2050 commitment." },
  { label: "Industrial Scale", text: "Real assets and real output — operating capacity today, with a credible build-out ahead." },
  { label: "Long-Term Offtake", text: "Building durable supply relationships with industrial and aviation partners across the region." }
];

const companies = [
  { name: "AMLI Group", href: "https://amli.group" },
  { name: "AMLI Mountains", href: "https://mountains.amli.group" },
  { name: "AMLI Property", href: "https://property.amli.group" },
  { name: "AMLI Kredit", href: "https://kredit.amli.group" },
  { name: "AMLI Asia Capital", href: "https://capital.amli.group" },
  { name: "AMLI Greens", href: "https://greens.amli.group" }
];

export default function Page() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((item) => observer.observe(item));
    const header = document.querySelector(".site-header");
    const onScroll = () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#home" className="nav__brand" aria-label="AMLI Greens home">
            <Logo reversed />
          </a>
          <div className="nav__links">
            <a href="#about">About</a>
            <a href="#services">What We Do</a>
            <a href="#why">Why It Matters</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav__cta" href="#contact">Partner with us</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <video className="hero__video" autoPlay muted loop playsInline poster="/images/kl-skyline-hero.jpg" aria-hidden="true">
            <source src="/videos/kuala-lumpur-skyline.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" />
          <div className="hero__content">
            <div className="hero__copy hero__copy--animate">
              <p className="eyebrow eyebrow--hero">AMLI Greens</p>
              <h1>
                Energy for a
                <br /> cleaner future.
              </h1>
              <p className="hero__subtitle">
                AMLI Greens advances Malaysia&rsquo;s energy transition — producing biofuel
                at industrial scale, developing Sustainable Aviation Fuel, and turning
                recovered resources into lasting value.
              </p>
              <div className="button-row">
                <a className="button button--primary" href="#services">What we do</a>
                <a className="button button--secondary button--on-dark" href="#contact">Partner with us</a>
              </div>
              <ul className="hero__pillars" aria-label="Focus areas">
                {pillars.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--mist" id="about" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">About AMLI Greens</p>
              <h2>Sustainability as operating practice.</h2>
              <p>
                AMLI Greens is the renewable-energy and circular-economy arm of the AMLI
                group. We operate a 250,000-tonne/yr FAME biofuel facility at Kuantan port
                and are developing a Sustainable Aviation Fuel plant — directly aligned with
                Malaysia&rsquo;s National Energy Transition Roadmap and net-zero 2050. For
                us, sustainability is an operating practice, not an aspiration.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="services" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">What We Do</p>
              <h2>Clean energy, at industrial scale.</h2>
            </div>
            <div className="company-grid" aria-label="Capabilities">
              {services.map((c, i) => (
                <article className="company-card company-card--static" key={c.name} data-reveal style={{ ["--accent" as string]: ACCENT, transitionDelay: `${i * 60}ms` }}>
                  <p className="eyebrow">{c.sector}</p>
                  <h3>{c.name}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--stone" id="why" data-reveal>
          <div className="section__inner">
            <div className="section-heading section-heading--wide">
              <p className="eyebrow">Why It Matters</p>
              <h2>Aligned with a national priority.</h2>
            </div>
            <div className="feature-grid" aria-label="Why it matters">
              {values.map((v, i) => (
                <article className="feature-card" key={v.label} data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3>{v.label}</h3>
                  <p>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" data-reveal>
          <div className="final-cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">An AMLI Group company</p>
              <h2>Build a cleaner future with us.</h2>
            </div>
            <div className="button-row">
              <a className="button button--primary" href="#contact">Partner with us</a>
              <a className="button button--secondary button--on-dark" href="https://amli.group">Explore AMLI Group</a>
            </div>
          </div>
        </section>

        <section className="section" id="contact" data-reveal>
          <div className="section__inner section__inner--contact">
            <div className="contact-details">
              <p className="eyebrow">Contact</p>
              <h2>Partnership and offtake enquiries.</h2>
              <address>
                Wisma AMLI, 14&ndash;14C, Jalan 20/38A, Off Jalan Segambut
                <br />
                Taman Sri Sinar, 51200 Kuala Lumpur, Malaysia
              </address>
              <p><strong>General:</strong> +60 3-6263 6464</p>
              <p><strong>Email:</strong> <a className="text-link" href="mailto:greens.contact@amli.group">greens.contact@amli.group</a></p>
              <iframe title="AMLI Greens office map" src="https://www.google.com/maps?q=14%20Jalan%2020%2F38A%20Taman%20Sri%20Sinar%2051200%20Kuala%20Lumpur%20Malaysia&output=embed" loading="lazy" />
            </div>
            <div className="callout callout--gold">
              <p className="eyebrow">Partner with us</p>
              <h2>Cleaner energy, together.</h2>
              <p>Interested in biofuel supply, SAF offtake or a sustainability partnership? Tell us more and our team will be in touch.</p>
              <div className="button-row">
                <a className="button button--primary" href="mailto:greens.contact@amli.group">Email our team</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <div>
            <Logo reversed />
            <p>Anchored &middot; Merit &middot; Legacy &middot; Intent</p>
          </div>
          <div className="footer__columns">
            <div>
              <h3>AMLI Companies</h3>
              {companies.map((c) => (<a key={c.name} href={c.href}>{c.name}</a>))}
            </div>
            <div>
              <h3>Company</h3>
              <a href="#about">About</a>
              <a href="#services">What We Do</a>
              <a href="#why">Why It Matters</a>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="mailto:greens.contact@amli.group">greens.contact@amli.group</a>
              <a href="tel:+60362636464">+60 3-6263 6464</a>
            </div>
          </div>
        </div>
        <div className="footer__legal">
          <p>&copy; 2026 AMLI Greens. An AMLI Group company.</p>
          <p>Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </>
  );
}
