import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import '../styles/hotels.css';

export function Hotels() {
  const { t } = useLanguage();
  const h = (t as any).hotelsPage;

  if (!h) return null;

  return (
    <main className="hotels-page">

      {/* HERO */}
      <section className="hotels-hero">
        <div className="hotels-hero__bg" aria-hidden="true">
          <div className="hotels-hero__orb hotels-hero__orb--1" />
          <div className="hotels-hero__orb hotels-hero__orb--2" />
          <div className="hotels-hero__grid" />
        </div>
        <div className="container hotels-hero__content">
          <span className="eyebrow">{h.hero.eyebrow}</span>
          <h1>
            {h.hero.title}<br />
            <span className="accent">{h.hero.titleAccent}</span>
          </h1>
          <p className="hotels-hero__desc">{h.hero.description}</p>
          <div className="hotels-hero__ctas">
            <Link to="/contact" className="btn btn--primary btn--lg">{h.hero.cta}</Link>
            <a href="#results" className="btn btn--ghost btn--lg">{h.hero.ctaSecondary}</a>
          </div>
          <div className="hotels-hero__stats">
            {h.hero.stats.map((s: any, i: number) => (
              <div key={i} className="hotels-hero__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="hotels-problem">
        <div className="container">
          <span className="eyebrow">{h.problem.eyebrow}</span>
          <h2>{h.problem.title} <span className="accent">{h.problem.titleAccent}</span></h2>
          <div className="hotels-problem__grid">
            {h.problem.items.map((item: any, i: number) => (
              <div key={i} className="hotels-problem__card">
                <div className="hotels-problem__icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="hotels-results" id="results">
        <div className="container">
          <span className="eyebrow">{h.results.eyebrow}</span>
          <h2>{h.results.title} <span className="accent">{h.results.titleAccent}</span></h2>
          <p className="hotels-results__sub">{h.results.subtitle}</p>
          <div className="hotels-results__grid">
            {h.results.metrics.map((m: any, i: number) => (
              <div key={i} className="hotels-results__metric">
                <div className="hotels-results__value">{m.value}</div>
                <div className="hotels-results__label">{m.label}</div>
                <div className="hotels-results__desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="hotels-services">
        <div className="container">
          <span className="eyebrow">{h.services.eyebrow}</span>
          <h2>{h.services.title} <span className="accent">{h.services.titleAccent}</span></h2>
          <div className="hotels-services__grid">
            {h.services.items.map((item: any, i: number) => (
              <div key={i} className="hotels-services__card">
                <div className="hotels-services__num">0{i + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.features.map((f: string, j: number) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="hotels-method">
        <div className="container">
          <span className="eyebrow">{h.method.eyebrow}</span>
          <h2>{h.method.title} <span className="accent">{h.method.titleAccent}</span></h2>
          <div className="hotels-method__steps">
            {h.method.steps.map((step: any, i: number) => (
              <div key={i} className="hotels-method__step">
                <div className="hotels-method__step-num">{step.number}</div>
                <div className="hotels-method__step-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section className="hotels-models">
        <div className="container">
          <span className="eyebrow">{h.models.eyebrow}</span>
          <h2>{h.models.title} <span className="accent">{h.models.titleAccent}</span></h2>
          <div className="hotels-models__grid">
            {h.models.items.map((model: any, i: number) => (
              <div key={i} className={`hotels-models__card${model.featured ? ' hotels-models__card--featured' : ''}`}>
                {model.featured && <div className="hotels-models__badge">{h.models.recommended}</div>}
                <h3>{model.name}</h3>
                <p className="hotels-models__desc">{model.description}</p>
                <ul>
                  {model.includes.map((inc: string, j: number) => (
                    <li key={j}>{inc}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn--primary">{h.models.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="hotels-quote">
        <div className="container">
          <blockquote>
            <p>{h.quote.text}</p>
            <cite>{h.quote.author}</cite>
          </blockquote>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hotels-cta">
        <div className="container">
          <h2>{h.cta.title} <span className="accent">{h.cta.titleAccent}</span></h2>
          <p>{h.cta.description}</p>
          <div className="hotels-cta__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">{h.cta.button}</Link>
            <a href="https://wa.me/351969333305" target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.523 5.863L0 24l6.293-1.496A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.996-1.368l-.358-.213-3.722.885.936-3.617-.234-.372A9.79 9.79 0 012.182 12C2.182 6.567 6.567 2.182 12 2.182c5.432 0 9.818 4.385 9.818 9.818 0 5.432-4.386 9.818-9.818 9.818z"/>
              </svg>
              {h.cta.whatsapp}
            </a>
          </div>
          <p className="hotels-cta__note">{h.cta.note}</p>
        </div>
      </section>

    </main>
  );
}
